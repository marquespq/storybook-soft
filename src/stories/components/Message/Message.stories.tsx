import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Message, MessageProps } from ".";

export default {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<MessageProps> = (args) => <Message {...args} />;

export const SuccessMessage = Template.bind({});
SuccessMessage.args = {
  type: "success",
  message: "Success message!",
};

export const WarningMessage = Template.bind({});
WarningMessage.args = {
  type: "warning",
  message: "Warning message!",
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  type: "error",
  message: "Error message!",
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  type: "success",
  message: "Custom message!",
  className: "bg-pink-200 text-pink-700",
  ariaLabel: "Custom message aria label",
};
