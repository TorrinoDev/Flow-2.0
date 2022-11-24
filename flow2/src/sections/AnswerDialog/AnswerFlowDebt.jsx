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
                        <Radio colorScheme="primary" variant="filled" onInput={()=>setIsTrue(true)} >Ja</Radio>
                        <Radio colorScheme="primary" variant="filled" onInput={()=>{setIsTrue(false);  setOpen(2);}} >Nej</Radio>
                    </HStack>
                </Center>
            </RadioGroup>
            <br />
            {isTrue() && 
            <div>
                <Input oninput={(event)=>SetUserObject({PublicDept:event.currentTarget.value})} placeholder='Hvor stor er din gæld til det offentlige?' type='number'></Input> 
            </div> }
  <br/>
  <HStack spacing={"30rem"} justifyContent={"end"}>
    {isTrue() && <Button colorScheme="success" onclick={()=> setOpen(2)}>Næste</Button>}
  <Button colorScheme="danger"  onclick={()=> setOpen(0)}>Tilbage</Button>
  </HStack>
    </div>
  );
}

export default AnswerFlowDebt;
