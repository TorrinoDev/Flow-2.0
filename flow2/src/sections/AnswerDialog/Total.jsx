import { createSignal, Show, Match } from 'solid-js';
import { Button, Center, Container, Divider, Text, SimpleGrid } from '@hope-ui/solid';
import createCookieStore from "@solid-primitives/cookies-store";
import { Husstand, Oversigt, PersonOplysninger } from './FirstAnswerRKI';

function Total(props) {
    const {userObject} = props
    const [storeUser, setStoreUser, ,clear] = createCookieStore()
  return (
    <div>
        <Oversigt />
        <PersonOplysninger />
        <SimpleGrid columns={2}>
            <Text id='name'>Navn: {userObject.AboutYouName}</Text>
            <Text id='mail'>Email: {userObject.AboutYouMail}</Text>
            <Text id='phone'>Telefon: +45 {userObject.AboutYouPhone}</Text>
            <Text id='CitizenShip'>Borgerskab: {storeUser.Citizenship}</Text>
        <Text id='MitId'>MitId: {userObject.MitId}</Text>
        <Text id='Relation'>Civilstand: {userObject.Relation}</Text>
        <Show when={userObject.PublicDept>=1}>
            <Text id='PublicDept'>Offentlig gæld: {userObject.PublicDept}</Text>
        </Show>
        <Text id='Employment'>Beskæftigelse: {userObject.Employment}</Text> 
        </SimpleGrid>


        <Husstand />
        <SimpleGrid columns={2}>
        <Text id='housing'> Boligtype: {userObject.Housing}</Text> 
        <Text id='children'>Børn: {userObject.Children}</Text> 
        <Show when={userObject.child!=undefined}>
            <Show when={userObject.child.childOne.length>=1}>
                <Text id='childOne'>Barn 1: {userObject.child.childOne} år</Text>
            </Show>
            <Show when={userObject.child.childTwo.length>=1}>
                <Text id='childTwo'>Barn 2: {userObject.child.childTwo} år</Text>
            </Show>
            <Show when={userObject.child.childThree.length>=1}>
                <Text id='childTwo'>Barn 3:{userObject.child.childThree} år</Text>
            </Show>
        </Show>
        <Text id='car'>Bil: {userObject.Car}</Text> 
        <Text id='coopMemberShip'>Coop Medlemskab: {userObject.CoopMemberShip}</Text> 
        <Show when={userObject.CohabitingEmail!=undefined}>
            <Text id='CohabitingEmail'>Medansøger email: {userObject.CohabitingEmail}</Text>
        </Show>
        <Show when={userObject.CoopMember!=undefined}>
            <Text id='CoopMember'>Coop Medlem: {userObject.CoopMember}</Text>
        </Show>
        <Show when={userObject.Employer!=undefined}>
            <Text id='Employer'>Arbejdsgiver: {userObject.Employer}</Text>
        </Show>
      
        <Show when={userObject.EmploymentMonth!=undefined}>
            <Text id='Employment Month'>Ansættelses måned: {userObject.EmploymentMonth}</Text>
        </Show>
        <Show when={userObject.EmploymentYear!=undefined}>
            <Text id='Employment Year'>Ansættelses år: {userObject.EmploymentYear}</Text>
        </Show>
        
        <Show when={userObject.BilType!=undefined}>
            <Text id='Biltype'>Biltype 1: {userObject.BilType}</Text>
        </Show>

     
        <Show when={userObject.BilType2!=undefined}>
            <Text id='Biltype'>Biltype 2: {userObject.BilType2}</Text>
        </Show>

       
        <Show when={userObject.BilType3!=undefined}>
            <Text id='Biltype'>Biltype 3: {userObject.BilType3}</Text>
        </Show>

        </SimpleGrid>
    </div>
  );
}

export default Total;
