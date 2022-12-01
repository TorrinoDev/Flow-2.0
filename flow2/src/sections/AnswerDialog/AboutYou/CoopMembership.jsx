import { Text, Button, Input, HStack, Center, SimpleGrid, SimpleSelect, SimpleOption, Divider, Box, Avatar, VStack } from '@hope-ui/solid';
import { createSignal, Match, onMount, Show, Switch } from 'solid-js';
import { CoopMembershipText, CoopMember } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren } from 'solid-icons/fa'
import { ImCross, ImUsers } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'
import { AiOutlineUserAdd } from 'solid-icons/ai'
import {
    NotificationsProvider,
    Notification,
    NotificationIcon,
    NotificationTitle,
    NotificationDescription,
    notificationService,
} from "@hope-ui/solid"





function CoopMembership(props) {
    const { SetUserObject, x, setX } = props
    const [y, setY] = createSignal(0);
    const [z, setZ] = createSignal(0);

    onMount(() => { notificationService.show({
        render: props => (
            <HStack
                bg="$loContrast"
                rounded="$md"
                border="1px solid $neutral7"
                shadow="$lg"
                p="$4"
                w="$full"
            >
                <Avatar name="Coop Medlemsservice" src="https://medlem.coop.dk/media/1205/cooplogomedramme.png?width=128" mr="$3" />
                <VStack alignItems="flex-start">
                    <Text size="sm" fontWeight="$medium">
                        Coop Medlemsservice
                    </Text>
                    <Text size="sm" color="$neutral11">
                        Er du ikke medlem? Bliv medlem og opnå fordele hos Coop!
                    </Text>
                </VStack>
                <Button
                    variant="ghost"
                    colorScheme="accent"
                    size="sm"
                    ml="auto"
                    onClick={() => window.open('https://indmeld.coop.dk/standard/forside/', '_blank')}
                >
                    Opret dig
                </Button>
            </HStack>
        ),
    })})

    return (
        <>

            <CoopMembershipText />
            <Center>
                <Box
                    as="img"
                    src="https://fakta.coop.dk/media/1333/medlemskort.png"
                    alt="CoopBank medlemskort"
                    objectFit="cover"
                    roundedTop="lg"
                    maxH="200px"
                ></Box>
            </Center>
            <Center>

                <HStack spacing="$40">

                    <Button leftIcon={<AiOutlineUserAdd boxSize={18} />} onclick={() => { setY(1); }}>Ja</Button>
                    <Button rightIcon={<ImUsers />} variant="outline" onclick={() => { setX(x() + 1); }}>
                        Nej
                    </Button>
                </HStack>
            </Center>
            <br />

            <Switch>
                <Match when={y() === 1}>
                    <Show when={y() === 1}>
                        <br />
                        <CoopMember />
                        <br />
                        <Input oninput={(event) => SetUserObject({ CoopMember: event.currentTarget.value })} placeholder='Medlemsnummer'></Input>
                    </Show>
                </Match>
            </Switch>



        



        </>
    );
}
export default CoopMembership;