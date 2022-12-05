import { Text, Button, Input, HStack, Progress, ProgressIndicator, ProgressLabel, Center, Divider } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { MitId, RKInDebtQuestion, AboutYouIntro, AboutYouName, AboutYouMail, AboutYouPhone, NoPhone, AboutYourCitizenship, AboutYourRelationship, AboutYourCoapplicant, Employer, Employer2, Children, Cars, CoopMembershipText, CoopMember, AboutYouDone, NoEmployment } from './FirstAnswerRKI'
import { Citizenships } from './AboutYou/Citizenship';
import { createStore } from "solid-js/store";
import createCookieStore from "@solid-primitives/cookies-store";
import Relations from './AboutYou/Relations';
import Family from './AboutYou/Family';
import Vehicle from './AboutYou/Vehicle';
import Employment from './AboutYou/Employment';
import CoopMembership from './AboutYou/CoopMembership';
import Housing from './AboutYou/Housing';
import Total from './Total';

function AnswerFlowAboutYou(props) {
  const { setOpen, SetUserObject, userObject } = props
  const [x, setX] = createSignal(1);
  const [errorObject, setErrorObject] = createStore({ name: "Indsæt dit navn", email: "Indsæt din email", phone: "Indsæt kun tal til dit telefonnummer" })
  const [errorSum, setErrorSum] = createSignal("");

  const [storeUser, setStoreUser, , clear] = createCookieStore()

  function validation(text, inputSubject) {
    if (text.length > 0) {
      switch (inputSubject) {
        case 0: 
        if (text.length>1) {
          SetUserObject({ AboutYouName: text })
          setErrorObject({name:""})
        } else {
          setErrorObject({name:"Skriv dit navn"})
        }
          break;
        case 1:
          if (text.match(".{1,}[@][a-å]{1,}[.][a-å]{1,}")) {
            SetUserObject({ AboutYouMail: text })
            setErrorObject({email:""})
          } else {
            setErrorObject({email:" Email format, ex: Anders@eksempel.dk"})
          }
          break;
        case 2:
          if (text.length==8) {
            setErrorObject({phone:""})
            SetUserObject({ AboutYouPhone: text })
          } else {
            setErrorObject({ phone: "Telefonnummer format (går under kun dansk +45 nummer), ex: 12345678" })
          }
          break;
      }
    }
  }

  function checkValidation()
  {
    console.log(userObject)
    console.log(x())
    switch(x()) {
      case 1:
        if (errorObject.email.length < 1 && errorObject.name.length < 1 && errorObject.phone.length < 1) {
          setErrorSum("")
          return true;
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Alle Helt røde felter skal ikke kunne ses")
          return false;
        }
      case 2:
        console.log(storeUser.Citizenship)
        if (storeUser.Citizenship.length>1) {
          setErrorSum("")
          return true;
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Der skal vælges dit borgerskab ")
          return false;
        }
        case 3: 
        if (userObject.CohabitingEmail!=undefined) {
          setErrorSum("")
          return true
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Der skal korrekt indtastes en email ")
          return false;
        }
        case 4: 
        if (userObject.Employer!=undefined) {
          setErrorSum("")
          return true
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Vælg din beskæftigelse")
          return false;
        }
        case 5:
          if (userObject.Children!=undefined) {
            if (userObject.child!=undefined && userObject.child.childOne.length>=1 && userObject.Children==="1"){
              setErrorSum("")
              return true;
            }
            else if (userObject.child!=undefined && userObject.child.childTwo.length>=1 && userObject.child.childOne.length>=1 && userObject.Children==="2") {
              setErrorSum("")
              return true;
            }
            else if (userObject.child!=undefined && userObject.child.childTwo.length>=1 && userObject.child.childOne.length>=1 && userObject.child.childThree.length>=1 && userObject.Children==="3") {
              setErrorSum("")
              return true;
            } else {
              setErrorSum("Fejl i indtastede oplysninger: Der skal vælges hvor mange børn du har, og indtastes deres alder")
              return false;
            }
          }else {
            setErrorSum("Fejl i indtastede oplysninger: Der skal vælges hvor mange børn du har, og indtastes deres alder")
            return false;
          }
        case 6: 
        if (userObject.Car!=undefined) {
          setErrorSum("")
          return true
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Der skal vælge en af mulighederne ")
          return false;
        }
        case 7: 
        if (userObject.Housing.length>1) {
          setErrorSum("")
          return true
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Der skal vælge en af mulighederne ")
          return false;
        }
        case 8:
        if (userObject.CoopMemberShip.length>1) {
          setErrorSum("")
          return true
        } else {
          setErrorSum("Fejl i indtastede oplysninger: Der skal vælge en af mulighederne ")
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
              <Text id='errorNameText' color={"red"}>{errorObject.name}</Text>
              <Input id='userNameInput' value={userObject.AboutYouName} oninput={(event) => validation(event.currentTarget.value, 0)} placeholder='Navn'></Input>
            </Text>
            <br />
            <Text>
              <AboutYouMail></AboutYouMail>
              <Text id='errorEmailText' color={"red"}>{errorObject.email}</Text>
              <Input id='userEmailInput' value={userObject.AboutYouMail} oninput={(event) => validation(event.currentTarget.value, 1)} placeholder='E-mail'></Input>
            </Text>
            <br />
            <Text>
              <AboutYouPhone></AboutYouPhone>
              <Text id='errorMobilText' color={"red"}>{errorObject.phone}</Text>
              <Input id='userPhoneInput' value={userObject.AboutYouPhone} oninput={(event) => validation(event.currentTarget.value, 2)} type="number" placeholder='Mobilnummer'></Input>
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
              <Housing SetUserObject={SetUserObject} x={x} setX={setX} />
            </Text>
          </Show>
          </Match>
        <Match when={x() === 8}>
          <Show when={x() === 8}>
            <Text>
              <CoopMembership SetUserObject={SetUserObject} x={x} setX={setX} />
            </Text>
          </Show>
        </Match>
       
        <Match when={x() === 9}>
          <Show when={x() === 9}>
            <Text>
              <AboutYouDone />
              <br />
              <Center>
                <Button id='okButton' colorScheme="success" onclick={() => { setX(x() + 1); }}>OK</Button>
              </Center>
            </Text>
          </Show>
        </Match>

        <Match when={x() === 10}>
          <Show when={x() === 10}>
            <Text>
              <Total userObject={userObject} x={x} setX={setX} />
            </Text>
          </Show>
        </Match>
        
        
      </Switch>
      <Center>
        <Text id='errorValidationText' color={"red"} size={"2xl"} fontWeight={"$bold"}>{errorSum()}</Text>
      </Center>

      <br />
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
        <Show when={x() !== 4} >
          <Show when={x() !== 12}>
            <Show when={x() !==6}>
              <Show when={x() !==9}>
                <Show when={x() !==10}>

                <Button id="nextButton" colorScheme="success" onclick={() => {  
              if (checkValidation()) {
                setX(x() + 1)
                errorSum("")
              } 
            }}
            >
              Næste</Button>
              </Show>
              </Show>
          </Show>
          </Show>
        </Show>
      </HStack>

      <br />
      <Progress trackColor="$info3" value={x() * 10}>
        <ProgressIndicator color="$info9" />
        <br />
      </Progress>
    </div>
  );
}

export default AnswerFlowAboutYou;