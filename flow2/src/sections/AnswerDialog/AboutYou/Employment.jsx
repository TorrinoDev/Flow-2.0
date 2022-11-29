import { 
  SimpleSelect,
  SimpleOption,
    Select,
    SelectTrigger,
    SelectPlaceholder,
    SelectValue,
    SelectTag,
    SelectTagCloseButton,
    SelectIcon,
    SelectContent,
    SelectListbox,
    SelectOptGroup,
    SelectLabel,
    SelectOption,
    SelectOptionText,
    SelectOptionIndicator,
  } from "@hope-ui/solid";

  export function EmploymentMonth() {
   return (
   <>
  <SimpleSelect placeholder="Vælg måned">
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
</> );
  }

export function EmploymentYear() {
  return (
    <>
    <SimpleSelect placeholder="Vælg år">
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
    </>
  );
}
  
  
