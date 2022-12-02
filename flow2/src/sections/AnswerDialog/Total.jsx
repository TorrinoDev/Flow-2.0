import { createSignal, Show, Match } from 'solid-js';
import { Button, Center, Container, Divider, Text } from '@hope-ui/solid';
import createCookieStore from "@solid-primitives/cookies-store";

function Total(props) {
    const {userObject} = props
    const [storeUser, setStoreUser, ,clear] = createCookieStore()
  return (
    <div>
        <Text id='MitId'>MitId:{userObject.MitId}</Text>
        <Text id='Relation'>Relation:{userObject.Relation}</Text>
        <Show when={userObject.PublicDept>=1}>
            <Text id='PublicDept'>PublicDept:{userObject.PublicDept}</Text>
        </Show>
        <Text id='name'>name:{userObject.AboutYouName}</Text>
        <Text id='mail'>mail:{userObject.AboutYouMail}</Text>
        <Text id='phone'>phone:{userObject.AboutYouPhone}</Text>
        <Text id='CitizenShip'>CitizenShip:{storeUser.Citizenship}</Text>
        <Text id='car'>car: {userObject.Car}</Text> 
        <Text id='children'>children: {userObject.Children}</Text> 
        <Show when={userObject.child.childOne.length>=1}>
            <Text id='childOne'>childOne:{userObject.child.childOne}</Text>
        </Show>
        <Show when={userObject.child.childTwo.length>=1}>
            <Text id='childTwo'>childTwo:{userObject.child.childTwo}</Text>
        </Show>
        <Show when={userObject.CohabitingEmail.length>1}>
            <Text id='CohabitingEmail'>CohabitingEmail:{userObject.CohabitingEmail}</Text>
        </Show>
        <Show when={userObject.CoopMember!=undefined}>
            <Text id='CoopMember'>CoopMember:{userObject.CoopMember}</Text>
        </Show>
        <Show when={userObject.Employer!=undefined}>
            <Text id='Employer'>Employer:{userObject.Employer}</Text>
        </Show>
        <Text id='Employment'>Employment: {userObject.Employment}</Text> 
        <Show when={userObject.EmploymentMonth!=undefined}>
            <Text id='Employment Month'>Employment Month:{userObject.EmploymentMonth}</Text>
        </Show>
        <Show when={userObject.EmploymentYear!=undefined}>
            <Text id='Employment Year'>Employment Year:{userObject.EmploymentYear}</Text>
        </Show>
    </div>
  );
}

export default Total;
