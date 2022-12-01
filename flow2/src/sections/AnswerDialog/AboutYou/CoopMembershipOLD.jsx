import { Box, Center } from "@hope-ui/solid"

export function CoopMembershipComponent() {

    return (
        <>
            <Center>
                <Box
                    as="img"
                    src="https://fakta.coop.dk/media/1333/medlemskort.png"
                    alt="CoopBank medlemskort"
                    objectFit="cover"
                    roundedTop="lg"
                    maxH="200px"
                ></Box>
            </Center>
        </>
    );
}
