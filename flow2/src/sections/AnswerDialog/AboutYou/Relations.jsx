import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center } from '@hope-ui/solid';


export function Relationship() {
    return (
    <>
    <HStack spacing={"0.5rem"}>
        <Button
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
            
        >
            Enlig
        </Button>

        <Button
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
        >
            Gift
        </Button>
        <Button
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
        >
            Samlever
        </Button>
        <Button
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
        >
            Skilt/separeret
        </Button>
        <Button
            variant="default"
            size="md"
            height="150px"
            width="150px"
            borderWidth="2px"
            borderColor="$neutral8"
        >
            Enke-M/K
        </Button>
        </HStack>

    </>
    );
}

