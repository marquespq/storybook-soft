import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from ".";
import { useState } from "react";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<InputProps> = (
  args: JSX.IntrinsicAttributes & InputProps
) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  id: "default-input",
  label: "Default input",
  ariaLabel: "Default input label",
  ariaDescribedby: "default-input-description",
  placeholder: "Digite algo",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  id: "initial-value-input",
  label: "Input with initial value",
  ariaLabel: "Input with initial value label",
  ariaDescribedby: "initial-value-input-description",
  value: "Valor inicial",
  placeholder: "Digite algo",
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  id: "password-input",
  label: "Senha",
  ariaLabel: "Senha label",
  ariaDescribedby: "password-input-description",
  placeholder: "Senha",
  type: "password",
};

export const CustomInput = Template.bind({});
CustomInput.args = {
  id: "custom-input",
  label: "Nome",
  ariaLabel: "Nome label",
  ariaDescribedby: "custom-input-description",
  placeholder: "Digite seu nome",
  className: "block text-gray-300 text-sm font-bold mb-2",
};
