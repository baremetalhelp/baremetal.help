import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
    AwsOrganizationsCustomResource,
    AwsOrganizationUnitCustomResource
} from "../custom-resources";

export type AwsOrganizationStackProps = StackProps

export class BareMetalAwsOrganizationStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        props: AwsOrganizationStackProps
    ) {
        super(scope, id, props);

        const organization = new AwsOrganizationsCustomResource(
            this,
            "organization"
        );

        // const orgTree = yaml.load(
        //     fs.readFileSync("./lib/stacks/config/org-structure.yaml", "utf8")
        // ) as any;

        // function makeOu(
        //     scope: Construct,
        //     parentId: string,
        //     path: string,
        //     name: string
        // ) {
        //     console.log(parentId, "->", name);

        //     return new AwsOrganizationsOrgUnitCustomResource2(
        //         scope,
        //         // `ou-${path}-${uuidv4()}`,
        //         `ou-${path}`,
        //         {
        //             ParentId: parentId,
        //             Name: name,
        //         }
        //     );
        // }

        // function traverseOuTree(
        //     scope: Construct,
        //     parentId: string,
        //     parentPath: string,
        //     orgNode: any
        // ) {
        //     if (typeof orgNode == "string") {
        //         const ou = makeOu(
        //             scope,
        //             parentId,
        //             parentPath + "-" + orgNode,
        //             orgNode
        //         );
        //     } else if (Array.isArray(orgNode)) {
        //         orgNode.forEach((n) => {
        //             traverseOuTree(scope, parentId, parentPath, n);
        //         });
        //     } else {
        //         Object.keys(orgNode).forEach((key) => {
        //             const ou = makeOu(scope, parentId, parentPath, key);

        //             traverseOuTree(
        //                 scope,
        //                 ou.organizationalUnitId,
        //                 parentPath + "_" + key,
        //                 orgNode[key]
        //             );
        //         });
        //     }
        // }

        // traverseOuTree(this, rootOuId, "ROOT", orgTree["ROOT"]);

        const ou1 = new AwsOrganizationUnitCustomResource(
            this,
            `ou-ONE_TWO_THREE`,
            {
                ParentId: organization.rootId,
                Name: "ONE_TWO_THREE",
            }
        );

        // const ou2 = new AwsOrganizationUnitCustomResource(this, `ou-two`, {
        //     ParentId: rootOuId,
        //     Name: "TWO",
        // });

        // const ou3 = new AwsOrganizationUnitCustomResource(this, `ou-three`, {
        //     ParentId: rootOuId,
        //     Name: "THREE",
        // });
        // const ou4 = new AwsOrganizationUnitCustomResource(this, `ou-four`, {
        //     ParentId: rootOuId,
        //     Name: "FOUR",
        // });

        new CfnOutput(this, "Organization Id", {
            value: organization.id,
        });
        new CfnOutput(this, "Organization RootId", {
            value: organization.rootId,
        });
    }
}
