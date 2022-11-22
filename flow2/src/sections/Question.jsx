
import {
    Container, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel, Text, Box, valueToPercent
} from '@hope-ui/solid';
import AnswerFlowDebt from './AnswerDialog/AnswerFlowDebt';

import AnswerFlowMitId from './AnswerDialog/AnswerFlowMitId';
import AnswerFlowRki from './AnswerDialog/AnswerFlowRKI';

function Question(props) {
    const { queue, setOpen, SetUserObject, userObject } = props

   

    return (
        <div>

                <Box minW={"40rem"} maxW={"50rem"}>
                    <Accordion 
                     index={queue()}
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Text  fontWeight="$medium" textAlign="center">
                                      Opstart på ansøgning 
                                    </Text>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <AnswerFlowRki setOpen={setOpen}></AnswerFlowRki>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Text  fontWeight="$medium" textAlign="center">
                                      Om Dig
                                    </Text>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <AnswerFlowDebt SetUserObject={SetUserObject} setOpen={setOpen}/>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Text  fontWeight="$medium" textAlign="center">
                                      MitID
                                    </Text>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                <AnswerFlowMitId SetUserObject={SetUserObject} userObject={userObject} setOpen={setOpen}></AnswerFlowMitId>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

        </div>
    );
}

export default Question;
