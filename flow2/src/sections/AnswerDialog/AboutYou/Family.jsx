import { Text, Button, Input, HStack, Center } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, Children } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren } from 'solid-icons/fa'
import { ImCross } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'

function Family(props) {
    const { SetUserObject, x, setX } = props
    const [y, setY] = createSignal(0);
    return (
        <div>
            <Children />
            <Center>
                <HStack spacing={"0.5rem"}>
                    <Button leftIcon={<ImCross boxSize={18} />} onclick={() => { setX(x() + 1); }}>Ingen</Button>
                    <Button leftIcon={<FaSolidChildDress boxSize={18} />} onclick={() => { setY(1); }}>Ja, et barn</Button>
                    <Button leftIcon={<FaSolidChildren boxSize={18} />} onclick={() => { setY(2); }}>Ja, to børn</Button>

                    <Button leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setY(3); }}>Ja, 3 eller flere</Button>


                </HStack>
            </Center>
            <Switch>
                <Match when={y() === 1}>
                    <Show when={y() === 1}>
                        <br />
                        <div>Barn 1 - alder</div>
                        <br />
                        <Input oninput={(event) => SetUserObject({ Children: event.currentTarget.value })} placeholder='Barn 1 alder'></Input>
                    </Show>
                </Match>
                <Match when={y() === 2}>
                    <Show when={y() === 2}>

                        <div>Barn 1 - alder</div>
                        <Input oninput={(event) => SetUserObject({ Children: event.currentTarget.value })} placeholder='Barn 1 alder'></Input>
                        <div>Barn 2 - alder</div>
                        <Input oninput={(event) => SetUserObject({ Children: event.currentTarget.value })} placeholder='Barn 2 alder'></Input>

                    </Show>
                </Match>
                <Match when={y() === 3}>
                    <Show when={y() === 3}>

                        <div>Hej3</div>

                    </Show>
                </Match>
            </Switch>
        </div>
    );
}

export default Family;
