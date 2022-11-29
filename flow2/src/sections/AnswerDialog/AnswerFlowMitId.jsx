import { Text,Button, Input,HStack } from '@hope-ui/solid';
import {MitId, RKInDebtQuestion} from './FirstAnswerRKI'

function AnswerFlowMitId(props) {
  const {setOpen, SetUserObject, userObject} = props
  return (
    <div>
        <Text>
            <MitId></MitId>
            <Input id="brugernavnInput" oninput={(event)=>SetUserObject({MitId:event.currentTarget.value})} placeholder='MitId Brugernavn'></Input>
        </Text>
        <br />
        <HStack spacing={"28rem"}>
  <Button colorScheme="danger" justifyContent={"end"} onclick={()=> setOpen(1)}>Tilbage</Button>
  <Button id="loginButton" colorScheme="success" onclick={()=> {setOpen(3);}}>Login</Button>
  </HStack>
    </div>
  );
}

export default AnswerFlowMitId;
