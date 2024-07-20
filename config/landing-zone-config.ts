import { ManagedPolicies } from "cdk-constants";
import { Statement } from "cdk-iam-floyd";
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
    SRE = "90674777ee-7d026bff-6189-4057-8a8e-fc5e79c39742",
    VIEW_ONLY = "90674777ee-3a05d01f-42f1-4234-9f71-432be98faf04",
    DEVELOPER = "90674777ee-9dda09a5-4155-491a-8991-82c5338e6160",
}

interface GroupAssignment {
    group: Group;
    accounts: Account[];
    permissionSetConfig: PermissionSetConfig;
}

export const landingZoneConfig: GroupAssignment[] = [
    // SRE
    //
    {
        group: Group.SRE,
        accounts: [
            Account.BILLING_ACCOUNT,
            Account.SANDBOX,
            Account.PREPROD1,
            Account.PROD1,
            Account.AUDIT,
            Account.LOG_ARCHIVE,
        ],
        permissionSetConfig: {
            name: "SRE",
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
                new Statement.S3().deny().toGetObject().onObject("*", "*"),
            ],
        },
    },

    // Sandbox developer
    //
    {
        group: Group.DEVELOPER,
        accounts: [Account.SANDBOX],
        permissionSetConfig: {
            name: "DEVELOPER",
            awsManagedPolicyNames: [ManagedPolicies.POWER_USER_ACCESS],
        },
    },
];
