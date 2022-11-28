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

  export function EmploymentOptions() {
   return (
   <>
  <SimpleSelect placeholder="Choose a framework">
  <SimpleOption value="react">React</SimpleOption>
  <SimpleOption value="angular" disabled>Angular</SimpleOption>
  <SimpleOption value="vue">Vue</SimpleOption>
  <SimpleOption value="svelte">Svelte</SimpleOption>
  <SimpleOption value="solid">Solid</SimpleOption>
</SimpleSelect>
</> );
  }
  
