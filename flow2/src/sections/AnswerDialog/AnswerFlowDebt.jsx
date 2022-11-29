import { Text,Button, Input, RadioGroup, Center, HStack, Radio } from '@hope-ui/solid';
import { createSignal, Show } from 'solid-js';
import {MitId, PublicDept, RKInDebtQuestion} from './FirstAnswerRKI'

function AnswerFlowDebt(props) {
  const {setOpen, SetUserObject} = props
  const [isTrue,setIsTrue] = createSignal(false);


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
<<<<<<< HEAD
                <Input id='debtInput' oninput={(event)=>SetUserObject({PublicDept:event.currentTarget.value})} placeholder='Hvor meget Gæld?' type='number'></Input> 
=======
                <Input oninput={(event)=>SetUserObject({PublicDept:event.currentTarget.value})} placeholder='Hvor stor er din gæld til det offentlige?' type='number'></Input> 
>>>>>>> origin/master
            </div> }
  <br/>
  <HStack spacing={"28rem"} justifyContent={"end"}>
  <Button colorScheme="danger"  onclick={()=> setOpen(0)}>Tilbage</Button>
  {isTrue() && <Button colorScheme="success" onclick={()=> setOpen(2)}>Næste</Button>}
  </HStack>
    </div>
  );
}

export default AnswerFlowDebt;
