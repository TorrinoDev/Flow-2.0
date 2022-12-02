import { Text, Button, Input, HStack, Center, SimpleGrid, SimpleSelect, SimpleOption, Divider } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { JobSituation, Employer, Employer2, NoEmployment, Employer3 } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren } from 'solid-icons/fa'
import { ImCross, ImUsers } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'
import { AiOutlineUserAdd } from 'solid-icons/ai'



function Employment(props) {
  const { SetUserObject, x, setX } = props
  const [y, setY] = createSignal(0);
  const [z, setZ] = createSignal(0);
  return (
    <div>
      <JobSituation />


      <SimpleGrid columns={2} gap="$4">
        <Button id='funktionærButton' leftIcon={<ImCross boxSize={18} />} onclick={() => { setY(1); }}>Funktionær</Button>

        <Button id='selvstændigButton' leftIcon={<FaSolidChildDress boxSize={18} />} onclick={() => { setY(1); }}>Selvstændig</Button>
        <Button id='tjenestemandButton' leftIcon={<FaSolidChildren boxSize={18} />} onclick={() => { setY(1); }}>Tjenestemand</Button>
        <Button id='otherEmployButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setY(1); }}>Anden ansættelse</Button>


        <Button id='underEducationButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1); }}>Under uddannelse</Button>
        <Button id='pensionistButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1); }}>Pensionist</Button>
        <Button id='hjemmegåendeButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1); }}>Hjemmegående</Button>
        <Button id='ledigButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setY(2); }}>Ledig</Button>
        <Button id='efterlønButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1); }}>Efterløn</Button>
        <Button id='tempJobButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setY(1); }}>Midlertidigt job</Button>
      </SimpleGrid>


      <Switch>
        <Match when={y() === 1}>
          <Show when={y() === 1}>
            <br />
            <Employer></Employer>
            <Input id='employmentLocationInput' oninput={(event) => SetUserObject({ Employer: event.currentTarget.value })} placeholder='Hvor er du ansat?'></Input>
            
            <Employer2></Employer2>
            <SimpleGrid  columns={2} gap="$4">
            <SimpleSelect id='ansatMånedDropdown' placeholder="Vælg måned">
              <SimpleOption value="Januar">Januar</SimpleOption>
              <SimpleOption value="Febuar">Febuar</SimpleOption>
              <SimpleOption value="Marts">Marts</SimpleOption>
              <SimpleOption value="April">April</SimpleOption>
              <SimpleOption value="Maj">Maj</SimpleOption>
              <SimpleOption value="Juni">Juni</SimpleOption>
              <SimpleOption value="Juli">Juli</SimpleOption>
              <SimpleOption value="August">August</SimpleOption>
              <SimpleOption value="September">September</SimpleOption>
              <SimpleOption value="Oktober">Oktober</SimpleOption>
              <SimpleOption value="November">November</SimpleOption>
              <SimpleOption value="December">December</SimpleOption>
            </SimpleSelect>

            <SimpleSelect id='ansatÅrDropdown' placeholder="Vælg år">
              <SimpleOption value="2022">2022</SimpleOption>
              <SimpleOption value="2021">2021</SimpleOption>
              <SimpleOption value="2020">2020</SimpleOption>
              <SimpleOption value="2019">2019</SimpleOption>
              <SimpleOption value="2018">2018</SimpleOption>
              <SimpleOption value="2017">2017</SimpleOption>
              <SimpleOption value="2016">2016</SimpleOption>
              <SimpleOption value="2015">2015</SimpleOption>
              <SimpleOption value="2014">2014</SimpleOption>
              <SimpleOption value="2013">2013</SimpleOption>
              <SimpleOption value="2012">2012</SimpleOption>
              <SimpleOption value="2011">2011</SimpleOption>
              <SimpleOption value="2010">2010</SimpleOption>
              <SimpleOption value="2009">2009</SimpleOption>
              <SimpleOption value="2008">2008</SimpleOption>
            </SimpleSelect>
            </SimpleGrid>
            <Center>
              <br />
              <br />
              <br />
              <br />

              <Button id='okButton' colorScheme="success" onclick={() => { setX(x() + 1); }}>OK</Button>

            </Center>
            <br />
            


          </Show>
        </Match>

        <Match when={y() === 2}>
          <Show when={y() === 2}>

          <NoEmployment />
          <SimpleGrid columns={2} gap="$4">
            <SimpleSelect placeholder="Vælg måned">
              <SimpleOption value="Januar">Januar</SimpleOption>
              <SimpleOption value="Febuar">Febuar</SimpleOption>
              <SimpleOption value="Marts">Marts</SimpleOption>
              <SimpleOption value="April">April</SimpleOption>
              <SimpleOption value="Maj">Maj</SimpleOption>
              <SimpleOption value="Juni">Juni</SimpleOption>
              <SimpleOption value="Juli">Juli</SimpleOption>
              <SimpleOption value="August">August</SimpleOption>
              <SimpleOption value="September">September</SimpleOption>
              <SimpleOption value="Oktober">Oktober</SimpleOption>
              <SimpleOption value="November">November</SimpleOption>
              <SimpleOption value="December">December</SimpleOption>
            </SimpleSelect>

            <SimpleSelect placeholder="Vælg år">
              <SimpleOption value="2022">2022</SimpleOption>
              <SimpleOption value="2021">2021</SimpleOption>
              <SimpleOption value="2020">2020</SimpleOption>
              <SimpleOption value="2019">2019</SimpleOption>
              <SimpleOption value="2018">2018</SimpleOption>
              <SimpleOption value="2017">2017</SimpleOption>
              <SimpleOption value="2016">2016</SimpleOption>
              <SimpleOption value="2015">2015</SimpleOption>
              <SimpleOption value="2014">2014</SimpleOption>
              <SimpleOption value="2013">2013</SimpleOption>
              <SimpleOption value="2012">2012</SimpleOption>
              <SimpleOption value="2011">2011</SimpleOption>
              <SimpleOption value="2010">2010</SimpleOption>
              <SimpleOption value="2009">2009</SimpleOption>
              <SimpleOption value="2008">2008</SimpleOption>
            </SimpleSelect>
            </SimpleGrid>
              <br />
              <br />
              <Center>
                <Button colorScheme="success" onclick={() => { setX(x() +1); }}>OK</Button>
              </Center>
              <br />

          </Show>
        </Match>
      </Switch>

    </div>
  );
}

export default Employment;
