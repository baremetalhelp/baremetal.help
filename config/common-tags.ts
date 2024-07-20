/**
 * Common Key/value pairs that are applied to each stack and all resources in the stack.
 *
 * By all means add your own.
 */
export const COMMON_TAGS: { [key: string]: string } = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "stephen@baremetal.help",
    environment: process.env.ENVIRONMENT || "unknown-environment",
    description:
        "Infra-as-Code and documentation for the robust cloud-native foundation for your enterprise",
};

