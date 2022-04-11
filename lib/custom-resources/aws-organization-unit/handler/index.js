import {
    CreateOrganizationalUnitCommand,
    OrganizationsClient,
    paginateListOrganizationalUnitsForParent,
    UpdateOrganizationalUnitCommand,
} from "@aws-sdk/client-organizations";

export async function onEventHandler(event: any) {
    const organizationsClient = new OrganizationsClient({});

    const { RequestType, ResourceProperties, PhysicalResourceId } = event;
    const { ParentId, Name } = ResourceProperties;

    switch (RequestType) {
        case "Create":
            let ou = await findExistingOrganizationUnit(
                organizationsClient,
                ParentId,
                Name
            );

            if (ou) {
                console.log(`Create Org Unit ${Name} for parent ${ParentId}`);
                const createOrganizationalUnitCommand =
                    new CreateOrganizationalUnitCommand({
                        ParentId,
                        Name,
                    });
                const response = await organizationsClient.send(
                    createOrganizationalUnitCommand
                );
                ou = response.OrganizationalUnit;
            }

            return {
                PhysicalResourceId: ou?.Id,
                Data: {
                    OrganizationalUnitId: ou?.Id,
                    ExistingOU: !!ou,
                },
            };

        case "Update":
            console.log(
                `Update Org Unit ${Name} for parent ${ParentId} for ${PhysicalResourceId}`
            );
            const updateOrganizationalUnitCommand =
                new UpdateOrganizationalUnitCommand({
                    OrganizationalUnitId: PhysicalResourceId,
                    Name,
                });
            await organizationsClient.send(updateOrganizationalUnitCommand);

            return {
                PhysicalResourceId,
                Data: { OrganizationalUnitId: PhysicalResourceId },
            };
        default:
            console.log(
                `Will not delete Unit ${Name} for parent ${ParentId} for ${PhysicalResourceId}`
            );

            return {
                PhysicalResourceId,
                Data: { OrganizationalUnitId: PhysicalResourceId },
            };
    }
}

async function findExistingOrganizationUnit(
    client: OrganizationsClient,
    ParentId: string,
    Name: string
) {
    const paginator = paginateListOrganizationalUnitsForParent(
        { client },
        { ParentId }
    );

    for await (const page of paginator) {
        const found = page.OrganizationalUnits?.find((ou) => ou.Name === Name);

        if (found) {
            return found;
        }
    }

    return undefined;
}
