import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel } from '@hope-ui/solid';
import { FaSolidMapPin } from 'solid-icons/fa'
import { SimpleGrid } from "@hope-ui/solid"


export function Citizenships() {

    return (

<>

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
            DK
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
            Non-DK + Arb. Til
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
            Non-DK Non-Arb. Til
        </Button>

        </>

        
    );
}