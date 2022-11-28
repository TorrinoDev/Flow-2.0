import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, AboutYouIntro, AboutYouName, AboutYouMail, AboutYouPhone, NoPhone, AboutYourCitizenship, AboutYourRelationship, AboutYourCoapplicant, Employer, Employer2 } from './FirstAnswerRKI'
import { FaSolidUserInjured } from 'solid-icons/fa'
import { ImUsers } from 'solid-icons/im'
import { EmploymentOptions } from './AboutYou/Employment';
import { Citizenships } from './AboutYou/Citizenship';



function AnswerFlowAboutYou(props) {
  const { setOpen, SetUserObject, userObject } = props
  const [isTrue, setIsTrue] = createSignal(false);
  const [x, setX] = createSignal(1);

  return (
    <div>
      <Switch>
        <Match when={x() === 1}>
          <Show when={x() === 1}>
            <Text>
              <AboutYouIntro></AboutYouIntro>
              <AboutYouName></AboutYouName>
              <Input oninput={(event) => SetUserObject({ AboutYouName: event.currentTarget.value })} placeholder='Navn'></Input>
            </Text>
            <br />
            <Text>
              <AboutYouMail></AboutYouMail>
              <Input oninput={(event) => SetUserObject({ AboutYouMail: event.currentTarget.value })} placeholder='E-mail'></Input>
            </Text>
            <br />
            <Text>
              <AboutYouPhone></AboutYouPhone>
              <Input oninput={(event) => SetUserObject({ AboutYouPhone: event.currentTarget.value })} placeholder='Mobilnummer'></Input>
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
                <Citizenships></Citizenships>
              </Text>
            </div>
          </Show>
        </Match>

        <Match when={x() === 3}>
          <Show when={x() === 3}>
            <Text>
              <AboutYourRelationship></AboutYourRelationship>
              <Button
                leftIcon={<FaSolidUserInjured />}
                boxSize={128}
                variant="default"
                size="md"
                height="150px"
                width="150px"
                borderWidth="2px"
                borderColor="$neutral8"
              >
                Enlig
              </Button>

            </Text>
          </Show>
        </Match>

        <Match when={x() === 4}>
          <Show when={x() === 4}>
            <Text>
              <AboutYourCoapplicant></AboutYourCoapplicant>
              <br />
              <Center>
                
                <HStack spacing="$40">

                  <Button leftIcon={<FaSolidUserInjured boxSize={18} />}>Ja tak, tilføj medansøger</Button>
                  <Button rightIcon={<ImUsers />} variant="outline" onclick={() => { setX(x() + 1); }}>
                    Nej tak, jeg ansøger alene
                  </Button>

                </HStack>
                
              </Center>
            </Text>
          </Show>
        </Match>
        <Match when={x() === 5}>
          <Show when={x() === 5}>
            <Text>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />}>Funtionær</Button>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />}>Selvstændig</Button>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />}>Tjenestemand</Button>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />}>Ledig</Button>

            </Text>
          </Show>
        </Match>
        <Match when={x() === 6}>
          <Show when={x() === 6}>
            <Text>
            <Employer></Employer>
            <Input oninput={(event) => SetUserObject({ Employer: event.currentTarget.value })} placeholder='Hvor er du ansat?'></Input>
            <Employer2></Employer2>
           <EmploymentOptions></EmploymentOptions>
           
            </Text>
          </Show>
        </Match>
      </Switch>

      <Show when={x() !==4 } >

      <HStack spacing={"28rem"}>
        
        <Button colorScheme="danger" justifyContent={"end"} onclick={() => {
          if (x() === 1) {
            setOpen(2);
          } else {
            {
              setX(x() - 1);
            }
          }
        }}>Tilbage</Button>
        <Button colorScheme="success" onclick={() => { setX(x() + 1); }}>Næste</Button>
        
      </HStack>
      </Show>
      <br />
      <Progress trackColor="$info3" value={x() * 10}>
        <ProgressIndicator color="$info9" />
        <br />
      </Progress>
    </div>
  );
}

export default AnswerFlowAboutYou;