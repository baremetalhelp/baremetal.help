import { ManagedPolicies } from "cdk-constants";
import { PermissionSetConfig } from "../lib/model";

// Can't be a nice enum because the values are computed at runtime
//
export const adminPermissionSetConfig: PermissionSetConfig = {
    name: "ADMINISTRATOR",
    awsManagedPolicyNames: [ManagedPolicies.ADMINISTRATOR_ACCESS],
};

export const readOnlyPermissionSetConfig: PermissionSetConfig = {
    name: "READ_ONLY",
    awsManagedPolicyNames: [ManagedPolicies.READ_ONLY_ACCESS],
};

export const developerPermissionSetConfig: PermissionSetConfig = {
    name: "DEVELOPER",
    awsManagedPolicyNames: [ManagedPolicies.POWER_USER_ACCESS],
};
