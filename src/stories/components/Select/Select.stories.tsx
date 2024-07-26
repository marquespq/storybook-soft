import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Select, SelectProps } from ".";

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Template: StoryFn<SelectProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return <Select {...args} value={selectedValue} onChange={handleChange} />;
};

export const BasicSelect = Template.bind({});
BasicSelect.args = {
  options,
  value: "",
  placeholder: "Select an option",
  ariaLabel: "Basic Select",
};

export const PreselectedSelect = Template.bind({});
PreselectedSelect.args = {
  options,
  value: "option2",
  placeholder: "Select an option",
  isClearable: true,
  title: "Title select",
  ariaLabel: "Preselected Select",
};

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  options,
  value: "",
  placeholder: "Select an option",
  disabled: true,
  ariaLabel: "Disabled Select",
};
