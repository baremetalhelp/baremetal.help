import { ManagedPolicies } from "cdk-constants";
import { S3 } from "cdk-iam-floyd";
import { PermissionSetConfig } from "../../model";

export const adminPermissionSetConfig: PermissionSetConfig = {
  name: "ADMINISTRATOR",
  awsManagedPolicyNames: [ManagedPolicies.ADMINISTRATOR_ACCESS],
  inlinePolicyStatements: [
    new S3().allow().toGetObject().onObject("*", "*"),
    new S3().deny().toGetObject().onBucket("foobar*"),
  ],
};

export const viewOnlyPermissionSetConfig: PermissionSetConfig = {
  name: "VIEW_ONLY",
  awsManagedPolicyNames: [ManagedPolicies.VIEW_ONLY_ACCESS],
  inlinePolicyStatements: [new S3().deny().toGetObject().onObject("*", "*")],
};

export const readOnlyPermissionSetConfig: PermissionSetConfig = {
  name: "READ_ONLY",
  awsManagedPolicyNames: [ManagedPolicies.READ_ONLY_ACCESS],
};
