import { Box, Stack, VStack, Heading, Center, Flex, Container, SimpleGrid} from "@hope-ui/solid"

function Homepage(){
    return(
        <div backgroundColor="gray">
            <Container bg="lightgray" w="100vw" h="100vh">
                <SimpleGrid columns={"3"} bg="red" h="100px">
                    <Box/>
                    <Box w="100%" h="100%">
                    <Box>
                        <Heading fontFamily="arial" fontWeight={"bold"} color="darkred" size="3xl">coop bank</Heading>
                    </Box>
                    </Box>
                    <Box/>
                </SimpleGrid>
            </Container>
        </div>       
    )
}

export default Homepage;