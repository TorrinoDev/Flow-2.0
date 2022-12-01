import { Text, Button, Input, HStack, Center, SimpleSelect, SimpleOption } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, Cars } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren, FaSolidUsersRectangle, FaSolidCar, FaSolid2 } from 'solid-icons/fa'
import { BsBicycle } from 'solid-icons/bs'
import { BiSolidCarGarage } from 'solid-icons/bi'


function Vehicle(props) {
  const { SetUserObject, x, setX } = props
  const [y, setY] = createSignal(0);
  return (
    <div>
      <Cars />
      <Center>
        <HStack spacing={"0.5rem"}>
          <Button leftIcon={<BsBicycle boxSize={18} />} onclick={() => { setX(x() + 1); }}>Ingen bil</Button>
          <Button leftIcon={<FaSolidCar boxSize={18} />} onclick={() => { setY(4); }}>En bil</Button>
          <Button leftIcon={<FaSolid2 boxSize={18} />} onclick={() => { setY(5); }}>To biler</Button>

          <Button leftIcon={<BiSolidCarGarage boxSize={18} />} onclick={() => { setY(6); }}>Flere biler</Button>


        </HStack>
      </Center>
      <Switch>
        <Match when={y() === 4}>
          <Show when={y() === 4}>
            <br />
            <div>Biltype 1</div>
            <br />
            <Input oninput={(event) => SetUserObject({ Children: event.currentTarget.value })} placeholder='Biltype 1'></Input>
          </Show>
        </Match>
        <Match when={y() === 5}>
          <Show when={y() === 5}>

            <div>Vælg biltype 1</div>
            <SimpleSelect placeholder="Biltype 1">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

            <div>Vælg biltype 2</div>
            <SimpleSelect placeholder="Biltype 2">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>


          </Show>
        </Match>
        <Match when={y() === 6}>
          <Show when={y() === 6}>

            <div>Vælg biltype 1</div>
            <SimpleSelect placeholder="Biltype 1">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

            <div>Vælg biltype 2</div>
            <SimpleSelect placeholder="Biltype 2">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

            <div>Vælg biltype 3</div>
            <SimpleSelect placeholder="Biltype 3">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

          </Show>
        </Match>
      </Switch>
    </div>
  );
}

export default Vehicle;
