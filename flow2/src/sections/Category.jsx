import Question from './Question';
import { createSignal } from 'solid-js';
import { Button, Center, Container, Divider, Text } from '@hope-ui/solid';
import { createStore } from "solid-js/store";

function Category() {
  const [open, setOpene] = createSignal(0);
  const [userObject, setUserObject] = createStore({CohabitingEmail:""})

  return (
    <div>
        <Container>

        <Center>
        <Text size="3xl">
            Lån ansøgning
        </Text>
        </Center>
        <Divider></Divider>
        <br />

        <Center>

      <Question queue={open} setOpen={setOpene} SetUserObject={setUserObject} userObject={userObject} />
        </Center>
        </Container>
            
    </div>
  );
}

export default Category;
