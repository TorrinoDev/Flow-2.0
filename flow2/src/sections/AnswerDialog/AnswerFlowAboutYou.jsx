import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center, Divider } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, AboutYouIntro, AboutYouName, AboutYouMail, AboutYouPhone, NoPhone, AboutYourCitizenship, AboutYourRelationship, AboutYourCoapplicant, Employer, Employer2, Children, Cars, CoopMembership, CoopMember, AboutYouDone, NoEmployment } from './FirstAnswerRKI'
import { Citizenships } from './AboutYou/Citizenship';
import { CoopMembershipComponent } from './AboutYou/CoopMembership';
import { createStore } from "solid-js/store";
import createCookieStore from "@solid-primitives/cookies-store";
import Relations from './AboutYou/Relations';
import Family from './AboutYou/Family';
import Vehicle from './AboutYou/Vehicle';
import Employment from './AboutYou/Employment';

function AnswerFlowAboutYou(props) {
  const { setOpen, SetUserObject, userObject } = props
  const [isTrue, setIsTrue] = createSignal(false);
  const [x, setX] = createSignal(1);
  const [errorObject, setErrorObject] = createStore({ name: "Indsæt dit navn", email: "Indsæt din email", phone: "Indsæt kun tal til dit telefonnummer" })
  const [errorSum, setErrorSum] = createSignal("");

  const [storeUser, setStoreUser, , clear] = createCookieStore()

  function validation(text, inputSubject) {
    let a = text
    if (text.length > 0) {
      switch (inputSubject) {
        case 0:
          if (text.length > 1) {
            setStoreUser("AboutYouName", text)
            setErrorObject({ name: "" })
          } else {
            setErrorObject({ name: "Skriv dit navn" })
          }
          break;
        case 1:
          if (a.match("[a-å]{1,}[@][a-å]{1,}[.][a-å]{1,}")) {
            setStoreUser("AboutYouMail", text)
            setErrorObject({ email: "" })
          } else {
            setErrorObject({ email: " Email format, ex: andr12f4@zealand.dk" })
          }
          break;
        case 2:
          if (text.length == 8) {
            setErrorObject({ phone: "" })
            setStoreUser("AboutYouPhone", text)
          } else {
            setErrorObject({ phone: "Telefonnummer format (går under kun dansk +45 nummer), ex: 12345678" })
          }
          break;
      }
    }
  }

  function checkValidation() {
    switch (x()) {
      case 1:
        if (errorObject.email.length < 1 && errorObject.name.length < 1 && errorObject.phone.length < 1) {
          setErrorSum("")
          return true;
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Alle Helt røde felter skal ikke kunne ses")
          return false;
        }
        break;
      case 2:
        console.log(storeUser.Citizenship)
        if (storeUser.Citizenship.length > 1) {
          return true;
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Der skal vælges dit borgerskab ")
          return false;
        }
    }
  }




  return (
    <div>

      <Switch>
        <Match when={x() === 1}>
          <Show when={x() === 1}>
            <Text>
              <AboutYouIntro></AboutYouIntro>
              <AboutYouName></AboutYouName>
              <Text color={"red"}>{errorObject.name}</Text>
              <Input oninput={(event) => validation(event.currentTarget.value, 0)} placeholder='Navn'></Input>
            </Text>
            <br />
            <Text>
              <AboutYouMail></AboutYouMail>
              <Text color={"red"}>{errorObject.email}</Text>
              <Input oninput={(event) => validation(event.currentTarget.value, 1)} placeholder='E-mail'></Input>
            </Text>
            <br />
            <Text>
              <AboutYouPhone></AboutYouPhone>
              <Text color={"red"}>{errorObject.phone}</Text>
              <Input oninput={(event) => validation(event.currentTarget.value, 2)} type="number" placeholder='Mobilnummer'></Input>
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
                <Citizenships setUser={SetUserObject}></Citizenships>
              </Text>
            </div>
          </Show>
        </Match>

        <Match when={x() === 3}>
          <Show when={x() === 3}>
            <Text>
              <Relations SetUserObject={SetUserObject} x={x} setX={setX} />

            </Text>
          </Show>
        </Match>


        <Match when={x() === 4}>
          <Show when={x() === 4}>
            <Text>
              <Employment SetUserObject={SetUserObject} x={x} setX={setX} />

            </Text>
          </Show>
        </Match>


       
        <Match when={x() === 5}>
          <Show when={x() === 5}>
            <Text>

              <Family SetUserObject={SetUserObject} x={x} setX={setX} />



            </Text>
          </Show>
        </Match>
        <Match when={x() === 6}>
          <Show when={x() === 6}>
            <Text>
              <Vehicle SetUserObject={SetUserObject} x={x} setX={setX} />
            </Text>
          </Show>
        </Match>
        <Match when={x() === 7}>
          <Show when={x() === 7}>
            <Text>
              <CoopMembership />
              <CoopMembershipComponent></CoopMembershipComponent>
            </Text>
          </Show>
        </Match>
        <Match when={x() === 8}>
          <Show when={x() === 8}>
            <Text>
              <CoopMember></CoopMember>
              <CoopMembershipComponent></CoopMembershipComponent>
              <Input oninput={(event) => SetUserObject({ CoopMember: event.currentTarget.value })} placeholder='Medlemsnummer'></Input>
            </Text>
          </Show>
        </Match>
        <Match when={x() === 9}>
          <Show when={x() === 9}>
            <Text>
              <AboutYouDone />
              <br />
              <Center>
                <Button colorScheme="success" onclick={() => { setX(x() + 2); }}>OK</Button>
              </Center>
            </Text>
          </Show>
        </Match>
        
        
      </Switch>
      <Center>
        <Text color={"red"} size={"2xl"} fontWeight={"$bold"}>{errorSum()}</Text>
      </Center>

      <br />
      <HStack spacing={"28rem"}>

        <Button colorScheme="danger" justifyContent={"end"} onclick={() => {
          if (x() === 12) {
            setX(x() - 6);
          }
          if (x() === 7) {
            setX(x() - 1);
          }
          if (x() === 1) {
            setOpen(2);
          } else {
            {
              setX(x() - 1);
            }
          }
        }}>Tilbage</Button>
        <Show when={x() !== 4} >
          <Show when={x() !== 12}>
            <Button colorScheme="success" onclick={() => { 
              if (checkValidation()) {
                setX(x() + 1)
                
              } else {
                setX(x() +1)
                console.log("Next kanppen. Linje 258 pt, fjern else statement, testing purpose only")
                
              }
            }}
            >
              Næste</Button>
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