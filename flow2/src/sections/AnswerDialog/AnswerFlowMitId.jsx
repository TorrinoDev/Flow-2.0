import { Text,Button, Input,HStack } from '@hope-ui/solid';
import {MitId, RKInDebtQuestion} from './FirstAnswerRKI'
import { createSignal } from 'solid-js';

function AnswerFlowMitId(props) {
  const {setOpen, SetUserObject, userObject} = props
  const [error,setError] = createSignal("Skriv i tekst feltet");
  function validation (event){
    let a = event
    if (a.length>0) {
      SetUserObject({MitId:a})
      setError("");
    } else {
      setError("Input forkert, skriv i tekst feltet")
    }
  }

  function next() {
    if (error().length>1) {
      return;
    }
    else {
      setOpen(3)
      return;
    }
  }
 
 
  return (
    <div>
        <Text>
            <MitId></MitId>
            <Text id='errorcodeMitId' color={"red"}>{error()}</Text>
            <Input id="brugernavnInput" onInput={(event)=>validation(event.currentTarget.value)} placeholder='MitId Brugernavn'></Input>
        </Text>
        <br />
        <HStack spacing={"28rem"}>
        <Button colorScheme="danger" justifyContent={"start"} onclick={()=> setOpen(1)}>Tilbage</Button>
  <Button colorScheme="success" id="loginButton"  onclick={()=> next()}>Login</Button>
  </HStack>
    </div>
  );
}

export default AnswerFlowMitId;
