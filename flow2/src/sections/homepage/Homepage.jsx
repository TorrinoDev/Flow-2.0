import { Box, Stack, VStack, Heading, Center, Flex, Container, SimpleGrid, HStack, Button, Spacer } from "@hope-ui/solid"
import Category from "../Category"
import { createSignal, Show } from "solid-js";

const [showComponent, setShowComponent] = createSignal(false);

function Homepage() {

    let scroll;

    const handleScroll = () => {
        console.log(scroll)

        setShowComponent(true)
      scroll.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div backgroundColor="gray">
            <Container bg="lightgray" w="100vw" minH="100vh">
                <HStack bg="white" h="100px">
                    <Box w="100%" h="100%" gridColumn={"2"} margin="10%">
                        <Heading marginTop={"2%"} fontFamily="arial" fontWeight={"bold"} color="darkred" size="3xl">coop bank</Heading>
                    </Box>
                </HStack>
                <SimpleGrid columns={"10"} marginTop="15%" marginBottom={"10%"}>
                    <Button bgColor={"green"} gridColumn="7" onClick={handleScroll} id="ansøgKnap">Ansøg her</Button>
                </SimpleGrid>
                <Box w="100%" h="200px" bg={"darkred"} color="white" textAlign={"center"} marginBottom="50px">placerholdertext</Box>
                <Show
                    when={showComponent()}>                        
                    <Container bg={"white"} maxW="800px" w="100%" h={"100%"} paddingBottom="2%" ref={scroll}>
                        <Category/>
                    </Container>
                </Show>
                <Spacer h={"150px"} />
                <Box w={"100%"} h="300px" bg={"dimgray"}>Her er en masse fyld</Box>
            </Container>

        </div>
    )
}

export default Homepage;