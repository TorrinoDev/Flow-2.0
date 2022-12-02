import { Text,Button, Input,HStack , Center} from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import {AboutYourRelationship, AboutYourCoapplicant } from '../FirstAnswerRKI'
import { FaSolidChildDress , FaSolidChildren } from 'solid-icons/fa'
import { ImCross, ImUsers } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'
import { AiOutlineUserAdd } from 'solid-icons/ai'


function Relations(props) {
  const {SetUserObject, x, setX} = props
  const [y, setY] = createSignal(0);
  const [z, setZ] = createSignal(0);
  const [errorCode,setErrorCode] = createSignal()

  function validation(inputText){
    if (inputText.match(".{1,}[@][a-å]{1,}[.][a-å]{1,}")) {
      SetUserObject({ CohabitingEmail: inputText })
      setErrorCode("")
    } else {
      setErrorCode(" Email format, ex: example@example.dk")
    }
  }

  return (
    <div>
        <AboutYourRelationship />
            <Center>
              <HStack spacing={"0.5rem"}>
            <Button id='enligButton' leftIcon={<ImCross boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Relation:"Enlig" }) }}>Enlig</Button>
            <Button id='giftButton' leftIcon={<FaSolidChildDress boxSize={18} />} onclick={() => { setY(1); SetUserObject({ Relation:"Gift" }) }}>Gift</Button>
            <Button id='samleverButton' leftIcon={<FaSolidChildren boxSize={18} />} onclick={() => { setY(1); SetUserObject({ Relation:"Samlever" }) }}>Samlever</Button>
            <Button id='skiltButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1);SetUserObject({ Relation:"Skilt/separeret" }) }}>Skilt/separeret</Button>
            <Button id='enkeButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { setX(x() + 1); SetUserObject({ Relation:"Enke M/K" }) }}>Enke M/K</Button>
            

            </HStack>
            </Center>
        <Switch>
        <Match when={y() === 1}>
          <Show when={y() === 1}>
            <br />
          <AboutYourCoapplicant></AboutYourCoapplicant>
              <br />
              
              <Center>
                
                <HStack spacing="$40">
                  
                  <Button id='jaMedansøgerButton' leftIcon={<AiOutlineUserAdd boxSize={18} />} onclick={() => { setZ(1); }}>Ja tak, tilføj medansøger</Button>
                  <Button id='nejMedansøgerButton' rightIcon={<ImUsers />} variant="outline" onclick={() => { setX(x() + 1); SetUserObject({ Relation:"Enlig" }) }}>
                    Nej tak, jeg ansøger alene
                  </Button>
                  </HStack>
                  </Center>
                  <br />
                  <Switch>
                    <Match when={z() ===1}>
                      <Show when={z() === 1}>

            
          <div>Ægtefælles/samlevers Email</div>
          <Text color={"red"}>{errorCode()}</Text>
            <Input id='medansøgerMailInput' oninput={(event) => validation(event.currentTarget.value)} placeholder='Email tilhørende ægtefælle/samlever'></Input>
                      </Show>
                    </Match>
                  </Switch>
                
                  
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

export default Relations;
