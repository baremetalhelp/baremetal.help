// This is an OU hierarchy in code just for fun and it's horrendous. Just because you understand
// the type system, doesn't mean it's a good fit.
// 
// So much easier to read the YAML equivalent.
//
export type OU_TREE = { [key: string]: OU[] };
export type OU = string | OU_TREE;

export const ORGANIZATION_CONFIG: OU[] = [
    "NETOPS",
    {
        PROD: [
            {
                "US-EAST-1": ["ACTIVE", "PASSIVE"],
                "US-EAST-2": ["ACTIVE", "PASSIVE"],
            },
            {
                "US-WEST-2": ["ACTIVE", "PASSIVE"],
                "EU-WEST-2": ["ACTIVE", "PASSIVE"],
            },
        ],
        QA: ["QA1", "QA2"],
        DEV: ["DEV1", "DEV2", "DEV3", "DEV4"],
        PERSONAL: ["PLATFORM", "DATA", "MOBILE"],
    },
    "DEVOPS",
];
