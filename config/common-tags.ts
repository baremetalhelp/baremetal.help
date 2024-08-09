/**
 * Common Key/value pairs that are applied to each stack and all resources in the stack.
 *
 * By all means add your own. `environment` refers to one of development, qa, staging, production if you're also deploying into preproduction accounts
 */
export const COMMON_TAGS = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "stephen@baremetal.help",
    environment: process.env.ENVIRONMENT || "unknown-environment",
    description: "BareMetal enterprise foundation",
};
