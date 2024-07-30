import React from "react";
import { Toggle, ToggleProps } from ".";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enable feature",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Enable feature",
  initialState: true,
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: "Custom label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Enable feature",
  disabled: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Enable feature",
  className: "my-4",
  toggleClassName: "bg-red-500",
  labelClassName: "font-bold",
};
