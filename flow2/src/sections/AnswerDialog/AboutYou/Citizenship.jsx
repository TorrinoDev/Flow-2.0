import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center } from '@hope-ui/solid';
import { FaSolidMapPin, FaSolidUsersRectangle } from 'solid-icons/fa'
import { SimpleGrid } from "@hope-ui/solid"
import createCookieStore from "@solid-primitives/cookies-store";
import { AiOutlineStop } from 'solid-icons/ai'

export function Citizenships() {
    const [storeUser, setStoreUser, ,clear] = createCookieStore()
    return (

        <>
            <Center>
                <HStack spacing={"0.5rem"}>
                <Button leftIcon={<FaSolidMapPin boxSize={18} />} onClick={() => setStoreUser("Citizenship", "Dansk")} >
                        Dansk
                    </Button>
                    <Button
                        leftIcon={<FaSolidUsersRectangle boxSize={18} />} onClick={() => setStoreUser("Citizenship", "Udlænding med arbejdstilladelse")}
                    >
                        Udlænding med <br />
                        arbejdstilladelse
                    </Button>
                    <Button
                       leftIcon={<AiOutlineStop boxSize={18} />} onClick={() => setStoreUser("Citizenship", "Udlænding uden arbejdstilladelse")}
                    >
                        Udlænding uden <br />
                        arbejdstilladelse
                    </Button>
                </HStack>
            </Center>
        </>


    );
}