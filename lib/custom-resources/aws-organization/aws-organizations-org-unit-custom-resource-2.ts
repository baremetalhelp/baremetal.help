import { CustomResource, StackProps } from "aws-cdk-lib";
import { AssetCode, Runtime, SingletonFunction } from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import * as path from "path";

export interface AwsOrganizationsOrgUnitCustomResource2Props
  extends StackProps {
  ParentId: string;
  Name: string;
}

export class AwsOrganizationsOrgUnitCustomResource2 extends Construct {
  public readonly organizationalUnitId: string;

  constructor(
    scope: Construct,
    id: string,
    props: AwsOrganizationsOrgUnitCustomResource2Props
  ) {
    super(scope, id);

    const onEventHandler = new SingletonFunction(this, "ou-event-handler", {
      uuid: "CDAAE276-342B-492F-827A-9FA5DEFAFCA8",
      runtime: Runtime.NODEJS_14_X,
      code: new AssetCode(path.join(__dirname, "handler")),
      handler: "index.onEvent",
    });

    // const isCompleteHandler = new SingletonFunction(
    //   this,
    //   "is-complete-handler",
    //   {
    //     uuid: "3F78A111-664C-49EA-ACDB-950C7FDB7F63",
    //     runtime: Runtime.NODEJS_14_X,
    //     code: new AssetCode(path.join(__dirname, "handler")),
    //     handler: "index.isComplete",
    //   }
    // );

    const provider = new Provider(this, "ou-provider", {
      onEventHandler,
      // isCompleteHandler,
      logRetention: RetentionDays.ONE_DAY,
    });

    const resource = new CustomResource(this, `ou-${id}`, {
      serviceToken: provider.serviceToken,
      properties: props,
    });

    this.organizationalUnitId = resource
      .getAtt("OrganizationalUnitId")
      .toString();
  }
}
