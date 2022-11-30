import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center } from '@hope-ui/solid';
import { FaSolidMapPin } from 'solid-icons/fa'
import { SimpleGrid } from "@hope-ui/solid"
import createCookieStore from "@solid-primitives/cookies-store";

export function Citizenships() {
    const [storeUser, setStoreUser, ,clear] = createCookieStore()
    function setUserSessionCookie(){

    }
    return (

<>
<Center>
<HStack spacing={"0.5rem"}>
        <Button
            leftIcon={<FaSolidMapPin />}
            boxSize={128}
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
            onClick={()=> setStoreUser("Citizenship","Dansk")}
        >
            Dansk
        </Button>
        <Button
            
            boxSize={128}
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
            onClick={()=> setStoreUser("Citizenship","Udlænding med arbejdstilladelse")}
        >
            Udlænding med <br/>
            arbejdstilladelse
        </Button>
        <Button
            
            boxSize={128}
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
            onClick={()=> setStoreUser("Citizenship","Udlænding uden arbejdstilladelse")}
        >
            Udlænding uden <br/>
            arbejdstilladelse
        </Button>
</HStack>
</Center>
        </>

        
    );
}