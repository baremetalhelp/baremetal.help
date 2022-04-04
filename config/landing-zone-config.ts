import { ManagedPolicies } from "cdk-constants";
import { S3 } from "cdk-iam-floyd";
import {
    developerPermissionSetConfig,
    readOnlyPermissionSetConfig
} from "../lib/config/permission-sets";
import { PermissionSetConfig } from "../lib/model";

export enum Account {
    BILLING_ACCOUNT = "825617765789",
    SANDBOX = "772866064453",
    PREPROD1 = "921112571860",
    PROD1 = "644590569382",
    AUDIT = "405828339838",
    LOG_ARCHIVE = "937567863100",
}

export enum Group {
    ADMINISTRATOR = "9067420728-45df392d-85da-4751-9f20-47fb268d3709",
    VIEW_ONLY = "9067420728-101bc3b4-7cbc-4b31-9bfe-4a50632d72b8",
    READ_ONLY = "9067420728-b8b4d794-4d00-4b87-a1b2-7c58ca76c3a2",
    DEVELOPER = "9067420728-e78cfac1-937f-459a-98f7-1a4fe90b5772",
}

interface GroupAssignment {
    group: Group;
    accounts: Account[];
    permissionSetConfig: PermissionSetConfig;
}

export const landingZoneConfig: GroupAssignment[] = [
    // Administrator
    //
    {
        group: Group.ADMINISTRATOR,
        accounts: [
            Account.BILLING_ACCOUNT,
            Account.SANDBOX,
            Account.PREPROD1,
            Account.PROD1,
            Account.AUDIT,
            Account.LOG_ARCHIVE,
        ],
        permissionSetConfig: {
            name: "ADMINISTRATOR",
            awsManagedPolicyNames: [ManagedPolicies.ADMINISTRATOR_ACCESS],
        },
    },

    // View only
    //
    {
        group: Group.VIEW_ONLY,
        accounts: [Account.BILLING_ACCOUNT, Account.PREPROD1, Account.PROD1],
        permissionSetConfig: {
            name: "VIEW_ONLY",
            awsManagedPolicyNames: [ManagedPolicies.VIEW_ONLY_ACCESS],
            inlinePolicyStatements: [
                new S3().deny().toGetObject().onObject("*", "*"),
            ],
        },
    },

    // Read only
    //
    {
        group: Group.READ_ONLY,
        accounts: [Account.BILLING_ACCOUNT, Account.PREPROD1, Account.PROD1],
        permissionSetConfig: readOnlyPermissionSetConfig,
    },

    // Sandbox developer
    //
    {
        group: Group.DEVELOPER,
        accounts: [Account.SANDBOX],
        permissionSetConfig: developerPermissionSetConfig,
    },
];
