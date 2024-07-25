import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { MultiSelect, MultiSelectProps } from ".";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
} as Meta;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
];

const Template: StoryFn<MultiSelectProps> = (args) => {
  const [selectedValues, setSelectedValues] = React.useState(args.values);

  const handleChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <MultiSelect {...args} values={selectedValues} onChange={handleChange} />
  );
};

export const BasicMultiSelect = Template.bind({});
BasicMultiSelect.args = {
  options,
  values: [],
  placeholder: "Select multiple options",
};

export const PreselectedMultiSelect = Template.bind({});
PreselectedMultiSelect.args = {
  options,
  values: ["option1", "option3"],
  placeholder: "Select multiple options",
};

export const DisabledMultiSelect = Template.bind({});
DisabledMultiSelect.args = {
  options,
  values: [],
  placeholder: "Select multiple options",
  disabled: true,
};
