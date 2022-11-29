import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center , Divider} from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, AboutYouIntro, AboutYouName, AboutYouMail, AboutYouPhone, NoPhone, AboutYourCitizenship, AboutYourRelationship, AboutYourCoapplicant, Employer, Employer2, Children, Cars, CoopMembership, CoopMember, AboutYouDone, NoEmployment } from './FirstAnswerRKI'
import { FaSolidUserInjured } from 'solid-icons/fa'
import { ImUsers } from 'solid-icons/im'
import { EmploymentMonth, EmploymentYear } from './AboutYou/Employment';
import { Citizenships } from './AboutYou/Citizenship';
import { Relationship } from './AboutYou/Relations';
import { AiOutlineUserAdd } from 'solid-icons/ai'
import { CoopMembershipComponent } from './AboutYou/CoopMembership';



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
              <Relationship></Relationship>

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

                  <Button leftIcon={<AiOutlineUserAdd boxSize={18} />}>Ja tak, tilføj medansøger</Button>
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
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />} onclick={() => { setX(x() + 1); }}>Funtionær</Button>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />} onclick={() => { setX(x() + 1); }}>Selvstændig</Button>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />} onclick={() => { setX(x() + 1); }}>Tjenestemand</Button>
            <Button leftIcon={<FaSolidUserInjured boxSize={18} />} onclick={() => { setX(x() + 7); }}>Ledig</Button>

            </Text>
          </Show>
        </Match>
        <Match when={x() === 6}>
          <Show when={x() === 6}>
            <Text>
            <Employer></Employer>
            <Input oninput={(event) => SetUserObject({ Employer: event.currentTarget.value })} placeholder='Hvor er du ansat?'></Input>
            <Employer2></Employer2>
           <EmploymentMonth></EmploymentMonth>
           <br />
           <Divider />
           <br />
           <EmploymentYear></EmploymentYear>
           
            </Text>
          </Show>
        </Match>
        <Match when={x() === 7}>
        <Show when={x() === 7}>
          <Text>
            <Children />
          </Text>
        </Show>
        </Match>
        <Match when={x() === 8}>
        <Show when={x() === 8}>
          <Text>
            <Cars />
          </Text>
        </Show>
        </Match>
        <Match when={x() === 9}>
        <Show when={x() === 9}>
          <Text>
            <CoopMembership/>
            <CoopMembershipComponent></CoopMembershipComponent>
          </Text>
        </Show>
        </Match>
        <Match when={x() === 10}>
        <Show when={x() === 10}>
          <Text>
            <CoopMember></CoopMember>
            <CoopMembershipComponent></CoopMembershipComponent>
            <Input oninput={(event) => SetUserObject({ CoopMember: event.currentTarget.value })} placeholder='Medlemsnummer'></Input>
          </Text>
        </Show>
        </Match>
        <Match when={x() === 11}>
        <Show when={x() === 11}>
          <Text>
            <AboutYouDone/>
            
          </Text>
        </Show>
        </Match>
        <Match when={x() === 12}>
        <Show when={x() === 12}>
          <Text>
            <NoEmployment />
            <br />
            <EmploymentMonth />
            <br />
            <br />
            <EmploymentYear />
            <br />
            <br />
            <Center>
            <Button colorScheme="success" onclick={() => { setX(x() - 5); }}>OK</Button>
          </Center>
        <br />
          </Text>
        </Show>
        </Match>
      </Switch>

    
<br />
      <HStack spacing={"28rem"}>

        <Button colorScheme="danger" justifyContent={"end"} onclick={() => {
          if (x() === 12) {
            setX(x() - 6);
          }
          if (x() === 7) {
            setX(x() -1 );
          }
          if (x() === 1) {
            setOpen(2);
          } else {
            {
              setX(x() - 1);
            }
          }
        }}>Tilbage</Button>
          <Show when={x() !==4 } >
            <Show when={x() !==12}>
        <Button colorScheme="success" onclick={() => { setX(x() + 1); }}>Næste</Button>
        </Show>
        </Show>
      </HStack>

      <br />
      <Progress trackColor="$info3" value={x() * 8}>
        <ProgressIndicator color="$info9" />
        <br />
      </Progress>
    </div>
  );
}

export default AnswerFlowAboutYou;