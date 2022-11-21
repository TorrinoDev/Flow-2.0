
import {
    Container, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel, Text, Box
} from '@hope-ui/solid';

function Category() {
    return (
        <div>
            <Container>
                <Box maxW={"50rem"} textAlign={"center"}>
                    <Accordion>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Text flex={1} fontWeight="$medium" textAlign="start">
                                        Composable
                                    </Text>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                Compose your application interface with reusable building blocks.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Text flex={1} fontWeight="$medium" textAlign="start">
                                        Accessible
                                    </Text>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                Hope UI follows WAI-ARIA standards,
                                helping you to reach the largest audience possible with less effort.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Container>
        </div>
    );
}

export default Category;
