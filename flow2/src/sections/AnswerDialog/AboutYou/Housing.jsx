import { Text, Button, Input, HStack, Center, SimpleGrid, SimpleSelect, SimpleOption, Divider } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { JobSituation, Employer, Employer2, NoEmployment, Employer3, Residence } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren } from 'solid-icons/fa'
import { ImCross, ImUsers } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'
import { AiOutlineUserAdd } from 'solid-icons/ai'



function Housing(props) {
  const { SetUserObject, x, setX } = props
  const [y, setY] = createSignal(0);
  const [z, setZ] = createSignal(0);
  return (
    <div>
      <Residence />


      <SimpleGrid columns={2} gap="$4">
        <Button leftIcon={<ImCross boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Housing:"I ejerbolig" }) }}>I ejerbolig</Button>

        <Button leftIcon={<FaSolidChildDress boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Housing:"I andelsbolig" })}}>I andelsbolig</Button>
        <Button leftIcon={<FaSolidChildren boxSize={18} />} onclick={() => { setX(x() + 1);SetUserObject({ Housing:"Til leje" }) }}>Til leje</Button>
        <Button leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1);SetUserObject({ Housing:"Hos forældre" }) }}>Hos forældre</Button>


        <Button leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1);SetUserObject({ Housing:"På kollegie" }) }}>På kollegie</Button>

        <Button leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Housing:"C/O" })}}>C/O</Button>


      </SimpleGrid>


      

    </div>
  );
}

export default Housing;
