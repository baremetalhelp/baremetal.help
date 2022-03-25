import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as fs from "fs";
import * as yaml from "js-yaml";
import { AwsOrganizationsOrgUnitCustomResource, AwsOrganizationsOrgUnitCustomResource2 } from "../custom-resources";
import { BareMetalConfig } from "../model";

export interface AwsOrganizationStackProps extends StackProps {
  bareMetalConfig: BareMetalConfig;
}

export class BareMetalAwsOrganizationStack extends Stack {
  constructor(scope: Construct, id: string, props: AwsOrganizationStackProps) {
    super(scope, id, props);

    const { organizationId, rootOuId } = props.bareMetalConfig;

    if (!organizationId || !rootOuId) {
      throw Error(
        "organizationId and rootOuId are both required to run this stack"
      );
    }

    const orgTree = yaml.load(
      fs.readFileSync("./lib/stacks/config/org-structure.yaml", "utf8")
    ) as any;

    function makeOu(
      scope: Construct,
      parentId: string,
      path: string,
      name: string
    ) {
      console.log(parentId, "->", name);

      return new AwsOrganizationsOrgUnitCustomResource2(
        scope,
        // `ou-${path}-${uuidv4()}`,
        `ou-${path}`,
        {
          ParentId: parentId,
          Name: name,
        }
      );
    }

    function traverseOuTree(
      scope: Construct,
      parentId: string,
      parentPath: string,
      orgNode: any
    ) {
      if (typeof orgNode == "string") {
        const ou = makeOu(scope, parentId, parentPath + "-" + orgNode, orgNode);
      } else if (Array.isArray(orgNode)) {
        orgNode.forEach((n) => {
          traverseOuTree(scope, parentId, parentPath, n);
        });
      } else {
        Object.keys(orgNode).forEach((key) => {
          const ou = makeOu(scope, parentId, parentPath, key);

          traverseOuTree(
            scope,
            ou.organizationalUnitId,
            parentPath + "_" + key,
            orgNode[key]
          );
        });
      }
    }

    // traverseOuTree(this, rootOuId, "ROOT", orgTree["ROOT"]);

    const ou1 = new AwsOrganizationsOrgUnitCustomResource(this, `ou-one`, {
      ParentId: 'ou-s40u-0kq0opas',
      Name: "ONE",
    });

    const ou2 = new AwsOrganizationsOrgUnitCustomResource(this, `ou-two`, {
      ParentId: 'ou-s40u-0kq0opas',
      Name: "TWO",
    });

    const ou3 = new AwsOrganizationsOrgUnitCustomResource(this, `ou-three`, {
      ParentId: rootOuId,
      Name: "THREE",
    });
    const ou4 = new AwsOrganizationsOrgUnitCustomResource(this, `ou-four`, {
      ParentId: rootOuId,
      Name: "FOUR",
    });
  }
}
