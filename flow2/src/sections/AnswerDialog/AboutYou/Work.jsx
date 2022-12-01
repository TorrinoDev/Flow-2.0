import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel } from '@hope-ui/solid';


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
            onClick={()=>SetUserObject({ Work: "Enlig" })}
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
            onClick={()=>SetUserObject({ Work: "Gift" })}
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
            onClick={()=>SetUserObject({ Work: "Samlever" })}
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
            onClick={()=>SetUserObject({ Work: "Skilt/separeret" })}
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
            onClick={()=>SetUserObject({ Work: "Enke-M/K" })}
        >
            Enke-M/K
        </Button>
        </HStack>
    </>
    );
}

