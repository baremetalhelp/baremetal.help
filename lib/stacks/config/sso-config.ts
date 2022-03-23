import { PermissionSetConfig } from "../../model";
import {
  adminPermissionSetConfig,
  readOnlyPermissionSetConfig,
  viewOnlyPermissionSetConfig
} from "./permission-sets";

export enum Account {
  BILLING_ACCOUNT = "825617765789",
}

export enum Group {
  ADMINISTRATOR = "9067420728-45df392d-85da-4751-9f20-47fb268d3709",
  VIEW_ONLY = "9067420728-101bc3b4-7cbc-4b31-9bfe-4a50632d72b8",
  READ_ONLY = "9067420728-b8b4d794-4d00-4b87-a1b2-7c58ca76c3a2",
}

interface GroupAssignment {
  permissionSetConfig: PermissionSetConfig;
  group: Group;
  accounts: Account[];
}

export const assignments: GroupAssignment[] = [
  // Administrator
  //
  {
    permissionSetConfig: adminPermissionSetConfig,
    accounts: [Account.BILLING_ACCOUNT],
    group: Group.ADMINISTRATOR,
  },

  // View only
  //
  {
    permissionSetConfig: viewOnlyPermissionSetConfig,
    accounts: [Account.BILLING_ACCOUNT],
    group: Group.VIEW_ONLY,
  },

  // Read only
  //
  {
    permissionSetConfig: readOnlyPermissionSetConfig,
    accounts: [Account.BILLING_ACCOUNT],
    group: Group.READ_ONLY,
  },
];
