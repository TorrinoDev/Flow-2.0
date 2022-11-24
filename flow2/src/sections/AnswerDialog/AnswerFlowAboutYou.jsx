import { Text,Button, Input,HStack, Progress, ProgressIndicator, ProgressLabel } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import {MitId, RKInDebtQuestion, AboutYouIntro, AboutYouName, AboutYouMail, AboutYouPhone, NoPhone, AboutYourCitizenship, AboutYourRelationship, AboutYourCoapplicant} from './FirstAnswerRKI'

function AnswerFlowAboutYou(props) {
  const {setOpen, SetUserObject, userObject} = props
  const [isTrue,setIsTrue] = createSignal(false);
  const [x, setX] = createSignal(1);

  return (
    <div>
        <Switch>
            <Match when={x() === 1}>
             <Show when={x() === 1}>
                <Text>
            <AboutYouIntro></AboutYouIntro>
            <AboutYouName></AboutYouName>
            <Input oninput={(event)=>SetUserObject({AboutYouName:event.currentTarget.value})} placeholder='Navn'></Input>
        </Text>
        <br />
        <Text>
            <AboutYouMail></AboutYouMail>
            <Input oninput={(event)=>SetUserObject({AboutYouMail:event.currentTarget.value})} placeholder='E-mail'></Input>
        </Text>
        <br />
        <Text>
            <AboutYouPhone></AboutYouPhone>
            <Input oninput={(event)=>SetUserObject({AboutYouPhone:event.currentTarget.value})} placeholder='Mobilnummer'></Input>
        </Text>
        <br />
        <Text><NoPhone></NoPhone></Text>
        <br />
        
            </Show>
            </Match>

        <Match when={x() === 2}>
        <Show when={x() === 2}>
        <div>
                <Text>
                    <AboutYourCitizenship></AboutYourCitizenship>
                <Input oninput={(event)=>SetUserObject({AboutYourCitizenship:event.currentTarget.value})} placeholder='Hvor stor er din gæld til det offentlige?' type='number'></Input> 
                </Text>
            </div>
        </Show>
        </Match>

        <Match when={x() === 3}>
            <Show when={x() === 3}>
                <Text>
                    <AboutYourRelationship></AboutYourRelationship>
                    <Button
  variant="default"
  size="md"
  height="150px"
  width="150px"
  borderWidth="2px"
  borderColor="$neutral8"
>
  Enlig
</Button>
<Button
  variant="default"
  size="md"
  height="150px"
  width="150px"
  borderWidth="2px"
  borderColor="$neutral8"
>
  Gift
</Button>
<Button
  variant="default"
  size="md"
  height="150px"
  width="150px"
  borderWidth="2px"
  borderColor="$neutral8"
>
  Samlever
</Button>
<Button
  variant="default"
  size="md"
  height="150px"
  width="150px"
  borderWidth="2px"
  borderColor="$neutral8"
>
  Skilt/separeret
</Button>
<Button
  variant="default"
  size="md"
  height="150px"
  width="150px"
  borderWidth="2px"
  borderColor="$neutral8"
>
  Enke-M/K
</Button>
                </Text>
            </Show>
            </Match>

        <Match when={x() === 4}>
            <Show when={x() === 4}>
                <Text>
                    <AboutYourCoapplicant></AboutYourCoapplicant>

                </Text>
            </Show>
        </Match>
        <Match when={x() === 5}>
            <Show when={x() === 5}>
                <Text>

                </Text>
            </Show>
        </Match>
        </Switch>
       
        <HStack spacing={"28rem"}>
  <Button colorScheme="danger" justifyContent={"end"} onclick={()=> { 
    if (x() === 1) {
        setOpen(2);
    } else {
        {setX(x() -1);
        }}}}>Tilbage</Button>
  <Button colorScheme="success" onclick={()=> {setX(x() +1);}}>Næste</Button>
  
  </HStack>
  <br/>
        <Progress trackColor="$info3" value={x() * 10}>
        <ProgressIndicator color="$info9" />
        <br />
        </Progress>
    </div>
  );
}

export default AnswerFlowAboutYou;