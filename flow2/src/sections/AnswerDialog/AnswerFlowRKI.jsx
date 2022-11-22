import { Text,Button } from '@hope-ui/solid';
import { createSignal } from 'solid-js';
import {RKInDebtQuestion} from './FirstAnswerRKI'

function AnswerFlowRki(props) {
  const {setOpen} = props

  return (
    <div>
        <Text>
            <RKInDebtQuestion></RKInDebtQuestion>
        </Text>
        <br />
        <Button colorScheme="success" onclick={()=> {setOpen(1)}}>Forstået</Button>
    </div>
  );
}

export default AnswerFlowRki;
