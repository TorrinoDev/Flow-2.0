import { Text, Button, Input, HStack, Center } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, Children } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren } from 'solid-icons/fa'
import { ImCross } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'
import { createStore } from "solid-js/store";

function Family(props) {
    const { SetUserObject, x, setX } = props
    const [y, setY] = createSignal(0);
    const [error, setError] = createStore({ errorOne: "Indtast barnets alder som heltal", 
    errorTwo: "Indtast barnets alder som heltal", errorThree: "Indtast barnets alder som heltal" })
    const [children,setChildren] = createStore({childOne:"",childTwo:""})
    const [todos, setTodos] = createSignal([]);
    
    function validation(inputText, id) {
        switch (id) {
            case 0:
                if (inputText.length >= 1) {
                    setChildren({childOne:inputText})
                    SetUserObject({child: children})
                    setError({ errorOne: "" })
                } else {
                    setError({ errorOne: "Manglende eller forkert indtastelse, acceptere: heltal" })
                }
                break;
            case 1:
                if (inputText.length >= 1) {
                    setChildren({childOne:inputText})
                    SetUserObject({child: children})
                    setError({ errorTwo: "" })
                } else {
                    setError({ errorTwo: "Manglende eller forkert indtastelse, acceptere: heltal" })
                }
                break;
            case 2:
                if (inputText.length >= 1) {
                    setChildren({childTwo:inputText})
                    SetUserObject({child: children})
                    setError({ errorThree: "" })
                } else {
                    setError({ errorThree: "Manglende eller forkert indtastelse, acceptere: heltal" })
                }
                break;
        }
    }

    return (
        <div>
            <Children />
            <Center>
                <HStack spacing={"0.5rem"}>
                    <Button id='userRelationN' leftIcon={<ImCross boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Children: "None" }) }}>Ingen</Button>
                    <Button id='userRelationYO' leftIcon={<FaSolidChildDress boxSize={18} />} onclick={() => { setY(1); SetUserObject({ Children: "One" }) }}>Ja, et barn</Button>
                    <Button id='userRelationYT' leftIcon={<FaSolidChildren boxSize={18} />} onclick={() => { setY(2); SetUserObject({ Children: "Two" }) }}>Ja, to børn</Button>

                    <Button id='userRelationYM' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setY(3); SetUserObject({ Children: "3,more" }) }}>Ja, 3 eller flere</Button>


                </HStack>
            </Center>
            <Switch>
                <Match when={y() === 1}>
                    <Show when={y() === 1}>
                        <br />
                        <div>Barn 1 - alder</div>
                        <br />
                        <Text color={"red"} size={"1xl"}>{error.errorOne}</Text>
                        <Input id='userRelationCA' value={children.childOne} type='number' onInput={(event) => validation(event.currentTarget.value,0)} placeholder='Barn 1 alder'></Input>
                    </Show>
                </Match>
                <Match when={y() === 2}>
                    <Show when={y() === 2}>

                        <div>Barn 1 - alder</div>
                        <Text color={"red"} size={"1xl"}>{error.errorTwo}</Text>
                        <Input id='userRelationCAO' value={children.childOne} type='number' onInput={(event) => validation(event.currentTarget.value,1)} placeholder='Barn 1 alder'></Input>
                        <div>Barn 2 - alder</div>
                        <Text color={"red"} size={"1xl"}>{error.errorThree}</Text>
                        <Input id='userRelationCAT' value={children.childTwo} type='number' onInput={(event) => validation(event.currentTarget.value,2)} placeholder='Barn 2 alder'></Input>

                    </Show>
                </Match>
                <Match when={y() === 3}>
                    <Show when={y() === 3}>

                    <div>
      
                    </div>

                    </Show>
                </Match>
            </Switch>
        </div>
    );
}

export default Family;

