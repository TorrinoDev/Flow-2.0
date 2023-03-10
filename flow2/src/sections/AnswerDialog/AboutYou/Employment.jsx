import { Text, Button, Input, HStack, Center, SimpleGrid, SimpleSelect, SimpleOption, Divider } from '@hope-ui/solid';
import { createSignal, Match, Show, Switch } from 'solid-js';
import { JobSituation, Employer, Employer2, NoEmployment, Employer3 } from '../FirstAnswerRKI'
import { FaSolidChildDress, FaSolidChildren } from 'solid-icons/fa'
import { ImCross, ImUsers } from 'solid-icons/im'
import { FaSolidUsersRectangle } from 'solid-icons/fa'
import { AiOutlineUserAdd } from 'solid-icons/ai'
import { BsInputCursorText } from 'solid-icons/bs';



function Employment(props) {
  const { SetUserObject, x, setX } = props
  const [y, setY] = createSignal(0);
  const [z, setZ] = createSignal(0);
  const [error,setError] = createSignal("")
  const [month,setMonth] = createSignal()
  const [year,setYear] = createSignal()
  let valInput;


  function validationbtn (InputCursorText,toId) {
    switch(toId) {
      case 1:
        if (InputCursorText.length>1) {
          SetUserObject({ Employment: InputCursorText })
          setY(1)
        } 
        break;
      case 2: 
      if (InputCursorText.length>1) {
        SetUserObject({ Employment: InputCursorText })
        setX(x() + 1)
      }
      break;
      case 3:
        if (InputCursorText.length>1) {
          SetUserObject({ Employment: InputCursorText })
          setY(2)
        } 
    }
  }

  function validationInput(inputText) {
    if (inputText.length>1) {
      SetUserObject({ Employer: inputText })
      setError("")
      valInput=true;
    } 
    else {
      setError("Fejlmeddelse: Indtast dit arbejdes navn")
    }
  }

  function validationInputMY(id) {
    switch(id) {
      case 0:
          if (month() != undefined && year() != undefined && valInput) {
            SetUserObject({ EmploymentMonth: month() })
            SetUserObject({ EmploymentYear: year() })
            setError("")
            setX(x() + 1);
          }else if (!valInput) {
            setError("Fejlmeddelse: Indtast dit arbejdes navn")
          } else {
            setError("Fejlmeddelse: V??lg m??ned og ??r du blev ansat")
          }
        break;
      case 1:
        if (month() != undefined && year() != undefined) {
          SetUserObject({ UnEmploymentMonth: month() })
          SetUserObject({ UnEmploymentYear: year() })
          setError("")
          setX(x() +1);
        }else {
          setError("Fejlmeddelse: V??lg m??ned og ??r du blev ledig")
        }
        break;
    }
  }

  return (
    <div>
      <JobSituation />

      <SimpleGrid columns={2} gap="$4">
        <Button id='funktion??rButton' leftIcon={<ImCross boxSize={18} />} onclick={() => { validationbtn ("Funktion??r",1);setError("")} }>Funktion??r</Button>

        <Button id='selvst??ndigButton' leftIcon={<FaSolidChildDress boxSize={18} />} onclick={() => { validationbtn ("Selvst??ndig",1);setError("")} }>Selvst??ndig</Button>
        <Button id='tjenestemandButton' leftIcon={<FaSolidChildren boxSize={18} />} onclick={() => { validationbtn ("Tjenestemand",1);setError("") }}>Tjenestemand</Button>
        <Button id='otherEmployButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Anden ans??ttelse",1);setError("")}}>Anden ans??ttelse</Button>


        <Button id='underEducationButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Under uddannelse",2);setError("")}}>Under uddannelse</Button>
        <Button id='pensionistButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Pensionist",2);setError("")}}>Pensionist</Button>
        <Button id='hjemmeg??endeButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Hjemmeg??ende",2);setError("")}}>Hjemmeg??ende</Button>
        <Button id='ledigButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Ledig",3);setError("")}}>Ledig</Button>
        <Button id='efterl??nButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Efterl??n",2);setError("")}}>Efterl??n</Button>
        <Button id='tempJobButton' leftIcon={<FaSolidUsersRectangle boxSize={18} />} onclick={() => { validationbtn ("Midlertidigt job",1);setError("") }}>Midlertidigt job</Button>
      </SimpleGrid>


      <Switch>
        <Match when={y() === 1}>
          <Show when={y() === 1}>
            <br />
            <Employer></Employer>
            <Input id='employmentLocationInput' onInput={(event) => validationInput(event.currentTarget.value)} placeholder='Hvor er du ansat?'></Input>
            
            <Employer2></Employer2>
            <SimpleGrid  columns={2} gap="$4">
            <SimpleSelect value={month()} onChange={setMonth} id='ansatM??nedDropdown' placeholder="V??lg m??ned">
              <SimpleOption value="Januar">Januar</SimpleOption>
              <SimpleOption value="Febuar">Febuar</SimpleOption>
              <SimpleOption value="Marts">Marts</SimpleOption>
              <SimpleOption value="April">April</SimpleOption>
              <SimpleOption value="Maj">Maj</SimpleOption>
              <SimpleOption value="Juni">Juni</SimpleOption>
              <SimpleOption value="Juli">Juli</SimpleOption>
              <SimpleOption value="August">August</SimpleOption>
              <SimpleOption value="September">September</SimpleOption>
              <SimpleOption value="Oktober">Oktober</SimpleOption>
              <SimpleOption value="November">November</SimpleOption>
              <SimpleOption value="December">December</SimpleOption>
            </SimpleSelect>

            <SimpleSelect value={year()} onChange={setYear} id='ansat??rDropdown' placeholder="V??lg ??r">
              <SimpleOption value="2022">2022</SimpleOption>
              <SimpleOption value="2021">2021</SimpleOption>
              <SimpleOption value="2020">2020</SimpleOption>
              <SimpleOption value="2019">2019</SimpleOption>
              <SimpleOption value="2018">2018</SimpleOption>
              <SimpleOption value="2017">2017</SimpleOption>
              <SimpleOption value="2016">2016</SimpleOption>
              <SimpleOption value="2015">2015</SimpleOption>
              <SimpleOption value="2014">2014</SimpleOption>
              <SimpleOption value="2013">2013</SimpleOption>
              <SimpleOption value="2012">2012</SimpleOption>
              <SimpleOption value="2011">2011</SimpleOption>
              <SimpleOption value="2010">2010</SimpleOption>
              <SimpleOption value="2009">2009</SimpleOption>
              <SimpleOption value="2008">2008</SimpleOption>
            </SimpleSelect>
            </SimpleGrid>
            <Center>


            </Center>
              <br />
      <Text textAlign={"center"} color={"red"} size={"2xl"}>{error()}</Text>
             
            <Text textAlign={"center"}>
              <Button id='okButton'  colorScheme="success" onclick={() => { validationInputMY(0) }}>OK</Button>

            </Text>



            <br />
            


          </Show>
        </Match>

        <Match when={y() === 2}>
          <Show when={y() === 2}>

          <NoEmployment />
          <SimpleGrid columns={2} gap="$4">
            <SimpleSelect id='noEmploymentMonth' value={month()} onChange={setMonth} placeholder="V??lg m??ned">
              <SimpleOption value="Januar">Januar</SimpleOption>
              <SimpleOption value="Febuar">Febuar</SimpleOption>
              <SimpleOption value="Marts">Marts</SimpleOption>
              <SimpleOption value="April">April</SimpleOption>
              <SimpleOption value="Maj">Maj</SimpleOption>
              <SimpleOption value="Juni">Juni</SimpleOption>
              <SimpleOption value="Juli">Juli</SimpleOption>
              <SimpleOption value="August">August</SimpleOption>
              <SimpleOption value="September">September</SimpleOption>
              <SimpleOption value="Oktober">Oktober</SimpleOption>
              <SimpleOption value="November">November</SimpleOption>
              <SimpleOption value="December">December</SimpleOption>
            </SimpleSelect>

            <SimpleSelect id='noEmploymentYear' value={year()} onChange={setYear}  placeholder="V??lg ??r">
              <SimpleOption value="2022">2022</SimpleOption>
              <SimpleOption value="2021">2021</SimpleOption>
              <SimpleOption value="2020">2020</SimpleOption>
              <SimpleOption value="2019">2019</SimpleOption>
              <SimpleOption value="2018">2018</SimpleOption>
              <SimpleOption value="2017">2017</SimpleOption>
              <SimpleOption value="2016">2016</SimpleOption>
              <SimpleOption value="2015">2015</SimpleOption>
              <SimpleOption value="2014">2014</SimpleOption>
              <SimpleOption value="2013">2013</SimpleOption>
              <SimpleOption value="2012">2012</SimpleOption>
              <SimpleOption value="2011">2011</SimpleOption>
              <SimpleOption value="2010">2010</SimpleOption>
              <SimpleOption value="2009">2009</SimpleOption>
              <SimpleOption value="2008">2008</SimpleOption>
            </SimpleSelect>
            </SimpleGrid>
              <br />
       
              <Text textAlign={"center"} color={"red"} size={"2xl"}>{error()}</Text>
             
            <Text textAlign={"center"}>
              <Button id='okButton1' colorScheme="success" onclick={() => { validationInputMY(1) }}>OK</Button>

            </Text>

          </Show>
        </Match>
      </Switch>

    </div>
  );
}

export default Employment;
