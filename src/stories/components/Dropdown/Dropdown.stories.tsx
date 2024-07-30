import React, { useState } from "react";
import { StoryFn, Meta, ArgTypes, Args } from "@storybook/react";
import Dropdown, { DropdownProps } from ".";

export default {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown,
  argTypes: {
    options: { control: "array" },
    value: { control: "text" },
    onChange: { action: "onChange" },
    placeholder: { control: "text" },
    className: { control: "text" },
  } as unknown as Partial<ArgTypes<Args>>,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.onChange(newValue);
  };

  return <Dropdown {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "",
  placeholder: "Select an option",
};

export const SelectedValue = Template.bind({});
SelectedValue.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "option2",
  placeholder: "Select an option",
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "",
  placeholder: "Choose an option",
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  value: "",
  placeholder: "Select an option",
  className: "custom-dropdown",
};
