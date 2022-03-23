import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as fs from "fs";
import * as yaml from "js-yaml";
import { v4 as uuidv4 } from "uuid";
import { AwsOrganizationsOrgUnitCustomResource } from "../custom-resources";
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

      return new AwsOrganizationsOrgUnitCustomResource(
        scope,
        // `ou-${path}-${uuidv4()}`, // parentId is not resolved until deploy, of course
        `ou-${path}}`, // parentId is not resolved until deploy, of course
        {
          parentId,
          name,
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

    traverseOuTree(this, rootOuId, "ROOT", orgTree["ROOT"]);
  }
}
