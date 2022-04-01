import { Stack, StackProps } from "aws-cdk-lib";
import { ManagedPolicy } from "aws-cdk-lib/aws-iam";
import {
    CfnAssignment,
    CfnPermissionSet,
    CfnPermissionSetProps,
} from "aws-cdk-lib/aws-sso";
import { Construct } from "constructs";
import { landingZoneConfig } from "../../config/landing-zone-config";
import { bareMetalConfig } from "../../config/common-config";
import { PermissionSetConfig } from "../model";

export interface BareMetalLandingZoneStackProps extends StackProps {}

function permissionSetFromConfig(
    scope: Construct,
    ssoInstanceArn: string,
    permissionSetConfig: PermissionSetConfig
) {
    const { name, inlinePolicyStatements, awsManagedPolicyNames } =
        permissionSetConfig;

    // Convert AWS Managed Policy Names to ARNs
    //
    const managedPolicies =
        awsManagedPolicyNames?.map(
            (policyName) =>
                ManagedPolicy.fromAwsManagedPolicyName(policyName)
                    .managedPolicyArn
        ) || [];

    // inlinePolicy.Statement can't be an empty array, so we only add that property if it's not
    //
    const permissionSetBaseProps: CfnPermissionSetProps = {
        instanceArn: ssoInstanceArn,
        name,
        managedPolicies,
    };

    let policyStatementConfig = {};

    if (inlinePolicyStatements && inlinePolicyStatements.length > 0) {
        const policyStatement = inlinePolicyStatements?.map((statement) =>
            statement.toJSON()
        );

        policyStatementConfig = {
            Statement: policyStatement,
        };
    }

    // Compose final properties, which will only include an inline policy if not empty
    //
    const finalPermissionSetProps = Object.assign(
        permissionSetBaseProps,
        policyStatementConfig
    );

    return new CfnPermissionSet(
        scope,
        permissionSetConfig.name,
        finalPermissionSetProps
    );
}

export class BareMetalLandingZoneStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        props: BareMetalLandingZoneStackProps
    ) {
        super(scope, id, props);

        const { ssoInstanceArn } = props.bareMetalConfig;

        if (!ssoInstanceArn) {
            throw Error(
                "Permission Set can only be created if there's an SSO ARN in the configuration"
            );
        }

        landingZoneConfig.forEach((assignment) => {
            const permissionSet = permissionSetFromConfig(
                this,
                ssoInstanceArn,
                assignment.permissionSetConfig
            );

            assignment.accounts.forEach((account) => {
                new CfnAssignment(
                    this,
                    `assignment_${account}_${assignment.group}`,
                    {
                        instanceArn: ssoInstanceArn,
                        permissionSetArn: permissionSet.attrPermissionSetArn,
                        targetType: "AWS_ACCOUNT",
                        targetId: account,
                        principalType: "GROUP",
                        principalId: assignment.group,
                    }
                );
            });
        });
    }
}
