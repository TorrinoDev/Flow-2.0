import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center } from '@hope-ui/solid';
import { FaSolidMapPin } from 'solid-icons/fa'
import { SimpleGrid } from "@hope-ui/solid"


export function Citizenships() {

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
        >
            Udlænding uden <br/>
            arbejdstilladelse
        </Button>
</HStack>
</Center>
        </>

        
    );
}