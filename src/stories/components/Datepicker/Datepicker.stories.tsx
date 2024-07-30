import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DatePicker } from ".";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "date" },
    onChange: { action: "onChange" },
    ariaLabel: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Selecione uma data",
  value: null,
  onChange: (date) => console.log(date),
  ariaLabel: "Selecione uma data",
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: "Selecione uma data",
  value: new Date("2022-07-25"),
  onChange: (date) => console.log(date),
  ariaLabel: "Selecione uma data",
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "Escolha uma data de nascimento",
  value: null,
  onChange: (date) => console.log(date),
  ariaLabel: "Escolha uma data de nascimento",
};

export const WithNoAriaLabel = Template.bind({});
WithNoAriaLabel.args = {
  label: "Selecione uma data",
  value: null,
  onChange: (date) => console.log(date),
  ariaLabel: undefined,
};
