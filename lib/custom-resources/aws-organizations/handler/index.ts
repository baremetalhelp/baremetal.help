import {
    CreateOrganizationCommand,
    DescribeOrganizationCommand,
    OrganizationFeatureSet,
    OrganizationsClient
} from "@aws-sdk/client-organizations";

/**
 * Borrows very heavily from https://github.com/awslabs/aws-bootstrap-kit
 */

// Create on demand. Never delete or update.
//
export async function onEventHandler(event: any) {
    console.log("Event: %j", event);

    const { RequestType, PhysicalResourceId } = event;

    const organizationsClient = new OrganizationsClient({
        region: "us-east-1",
    });

    switch (RequestType) {
        case "Create":
            const describeOrganization = await organizationsClient.send(
                new DescribeOrganizationCommand({})
            );

            if (describeOrganization.Organization) {
                console.log(
                    "Organization already exists %j",
                    describeOrganization.Organization
                );

                const Id = describeOrganization.Organization
                    ? describeOrganization.Organization.Id
                    : undefined;

                return {
                    PhysicalResourceId: Id,
                    Data: {
                        OrganizationId: Id,
                    },
                };
            }

            const createOrganization = await organizationsClient.send(
                new CreateOrganizationCommand({
                    FeatureSet: OrganizationFeatureSet.ALL,
                })
            );

            return {
                PhysicalResourceId: createOrganization.Organization?.Id,
                Data: {
                    OrganizationId: createOrganization.Organization?.Id,
                },
            };

        default:
            // Not sure what to do here
            //
            return {
                PhysicalResourceId,
                Data: { OrganizationId: PhysicalResourceId },
            };
    }
}
