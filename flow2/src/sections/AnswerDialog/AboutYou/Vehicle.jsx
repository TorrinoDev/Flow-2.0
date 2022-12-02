import { Text, Button, Input, HStack, Center, SimpleSelect, SimpleOption } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, Cars } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren, FaSolidUsersRectangle, FaSolidCar, FaSolid2 } from 'solid-icons/fa'
import { BsBicycle } from 'solid-icons/bs'
import { BiSolidCarGarage } from 'solid-icons/bi'


function Vehicle(props) {
  const { SetUserObject, x, setX } = props
  const [y, setY] = createSignal(0);
  const [type, setType] = createSignal()
  const [type2, setType2] = createSignal()
  const [type3, setType3] = createSignal()


  function validationCar(id) {
    switch (id) {
      case 0:
        if (type() != undefined) {
          SetUserObject({ BilType: type() })

          setX(x() + 1);
        }
        break;
      case 1:
        if (type() != undefined) {
          SetUserObject({ BilType: type() })
          SetUserObject({ BilType2: type2() })
          setX(x() + 1);
        }
        break;
      case 2:
        if (type() != undefined) {
          SetUserObject({ BilType: type() })
          SetUserObject({ BilType2: type2() })
          SetUserObject({ Biltype3: type3() })
          setX(x() + 1);
        }
        break;
    }
  }




  return (
    <div>
      <Cars />
      <Center>
        <HStack spacing={"0.5rem"}>
          <Button leftIcon={<BsBicycle boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Car: "Ingen" }) }}>Ingen bil</Button>
          <Button leftIcon={<FaSolidCar boxSize={18} />} onclick={() => { setY(4); SetUserObject({ Car: "1" }) }}>En bil</Button>
          <Button leftIcon={<FaSolid2 boxSize={18} />} onclick={() => { setY(5); SetUserObject({ Car: "2" }) }}>To biler</Button>

          <Button leftIcon={<BiSolidCarGarage boxSize={18} />} onclick={() => { setY(6); SetUserObject({ Car: "Flere" }) }}>Flere biler</Button>


        </HStack>
      </Center>
      <Switch>
        <Match when={y() === 4}>
          <Show when={y() === 4}>
            <br />
            <div>Biltype 1</div>
            <br />
            <div>Vælg biltype 1</div>
            <SimpleSelect value={type()} onChange={setType} placeholder="Biltype 1">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>
            <Center>

            </Center>
            <br />
            <Text textAlign={"center"} color={"red"} size={"2xl"}></Text>

            <Text textAlign={"center"}>
              <Button colorScheme="success" onclick={() => { validationCar(0); }}>OK</Button>

            </Text>

            <br />

          </Show>
        </Match>
        <Match when={y() === 5}>
          <Show when={y() === 5}>

            <div>Vælg biltype 1</div>
            <SimpleSelect value={type()} onChange={setType} placeholder="Biltype 1">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

            <div>Vælg biltype 2</div>
            <SimpleSelect value={type2()} onChange={setType2} placeholder="Biltype 2">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>
            <Center>

            </Center>
            <br />
            <Text textAlign={"center"} color={"red"} size={"2xl"}></Text>

            <Text textAlign={"center"}>
              <Button colorScheme="success" onclick={() => { validationCar(1); }}>OK</Button>

            </Text>

            <br />

          </Show>
        </Match>
        <Match when={y() === 6}>
          <Show when={y() === 6}>

            <div>Vælg biltype 1</div>
            <SimpleSelect value={type()} onChange={setType} placeholder="Biltype 1">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

            <div>Vælg biltype 2</div>
            <SimpleSelect value={type2()} onChange={setType2} placeholder="Biltype 2">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>

            <div>Vælg biltype 3</div>
            <SimpleSelect value={type3()} onChange={setType3} placeholder="Biltype 3">
              <SimpleOption value="Privatbil">Privatbil</SimpleOption>
              <SimpleOption value="Firmabil">Firmabil</SimpleOption>
              <SimpleOption value="Leasingbil">Leasingbil</SimpleOption>
            </SimpleSelect>
            <Center>

            </Center>
            <br />
            <Text textAlign={"center"} color={"red"} size={"2xl"}></Text>

            <Text textAlign={"center"}>
              <Button colorScheme="success" onclick={() => { validationCar(2); }}>OK</Button>

            </Text>

            <br />
          </Show>
        </Match>
      </Switch>
    </div>
  );
}

export default Vehicle;
