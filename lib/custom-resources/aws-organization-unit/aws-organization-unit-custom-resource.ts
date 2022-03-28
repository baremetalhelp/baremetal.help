import { CustomResource } from "aws-cdk-lib";
import { Construct } from "constructs";
import { AwsOrganizationUnitProvider } from "./aws-organization-unit-provider";
import { v4 as uuidv4 } from "uuid";

/**
 * Borrows very heavily from https://github.com/awslabs/aws-bootstrap-kit
 */
export interface AwsOrganizationUnitCustomResourceProps {
    Name: string;
    ParentId: string;
}

export class AwsOrganizationUnitCustomResource extends Construct {
    readonly id: string;

    constructor(
        scope: Construct,
        id: string,
        props: AwsOrganizationUnitCustomResourceProps
    ) {
        super(scope, id);

        const { Name, ParentId } = props;
        const ouProvider = AwsOrganizationUnitProvider.getOrCreate(this);

        let ou = new CustomResource(this, `OU-${uuidv4()}`, {
            serviceToken: ouProvider.provider.serviceToken,
            resourceType: "Custom::OrganizationUnit",
            properties: {
                Name: props.Name,
                ParentId: props.ParentId,
            },
        });

        this.id = ou.getAtt("OrganizationalUnitId").toString();
    }
}
