import { CreateOrganizationalUnitCommand, OrganizationsClient, paginateListOrganizationalUnitsForParent, UpdateOrganizationalUnitCommand } from "@aws-sdk/client-organizations";

async function onEventHandler(event:any) {
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
                let createOrganizationalUnitCommand =
                    new CreateOrganizationalUnitCommand({
                        ParentId,
                        Name,
                    });
                let response = await organizationsClient.send(
                    createOrganizationalUnitCommand
                );
                ou = response.OrganizationalUnit;
            }

            let Id = ou ? ou.Id : undefined;

            return {
                PhysicalResourceId: Id,
                Data: {
                    OrganizationalUnitId: Id,
                    ExistingOU: new Boolean(!ou),
                }, // Basic TypeScript ignorance on my part
            };

        case "Update":
            console.log(
                `Update Org Unit ${Name} for parent ${ParentId} for ${PhysicalResourceId}`
            );
            let updateOrganizationalUnitCommand =
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

async function findExistingOrganizationUnit(client:any, ParentId:any, Name:any) {
    let paginator = paginateListOrganizationalUnitsForParent({ client }, { ParentId });

    for await (const page of paginator) {
        let organizationUnits = page.OrganizationalUnits;

        if (organizationUnits) {
            let found = organizationUnits.find((ou) => ou.Name === Name);

            if (found) {
                return found;
            }
        }
    }

    return undefined;
}
