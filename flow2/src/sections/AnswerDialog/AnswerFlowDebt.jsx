import { Text,Button, Input, RadioGroup, Center, HStack, Radio } from '@hope-ui/solid';
import { createSignal, Show } from 'solid-js';
import {MitId, PublicDept, RKInDebtQuestion} from './FirstAnswerRKI'

function AnswerFlowDebt(props) {
  const {setOpen, SetUserObject} = props
  const [isTrue,setIsTrue] = createSignal(false);
  const [error,setError] = createSignal("Input tal i tekst feltet");
  function validation (event){
    if (event.length>0) {
      SetUserObject({PublicDept:event})
      setError("");
    } else {
      setError("Ikke et rigtig input, kun tal, fx: 10000")
    }
  }

  function next() {
    if (error().length>1) {
      return;
    }
    else {
      setOpen(2)
      return;
    }
  }

  return (
    <div>
        <Text>
           <PublicDept/>
        </Text>
            <RadioGroup>
                <Center>
                    <HStack spacing={"2rem"}>
                        <Radio colorScheme="primary" variant="filled" onInput={()=>setIsTrue(true)} id="debtJa" name='debtJaButton'>Ja</Radio>
                        <Radio colorScheme="primary" variant="filled" onInput={()=>{setIsTrue(false);  setOpen(2);}} id="debtNej" name='debtNejButton'>Nej</Radio>
                    </HStack>
                </Center>
            </RadioGroup>
            <br />
            {isTrue() && 
            <div>
              <Text id='errorcodeDept' color={"red"}>{error()}</Text>
                <Input id='debtInput' onInput={(event)=>validation(event.currentTarget.value)} placeholder='Hvor stor er din gæld til det offentlige?' type='number'></Input> 
            </div> }
  <br/>
  <HStack spacing={"28rem"} justifyContent={"end"}>
  <Button colorScheme="danger"  onclick={()=> setOpen(0)}>Tilbage</Button>
  {isTrue() && <Button id='nextButton' colorScheme="success" onclick={()=> next()}>Næste</Button>}
  </HStack>
    </div>
  );
}

export default AnswerFlowDebt;
