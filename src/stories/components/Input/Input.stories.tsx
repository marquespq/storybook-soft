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

  return (
    <Input
      {...args}
      value={value}
      onChange={handleChange}
      aria-label={args.ariaLabel}
      aria-describedby={args.ariaDescribedby}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Digite algo",
  ariaLabel: "Default input",
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: "Valor inicial",
  placeholder: "Digite algo",
  ariaLabel: "Input with initial value",
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  placeholder: "Senha",
  type: "password",
  ariaLabel: "Password input",
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: "Digite seu nome",
  ariaLabel: "Input with custom placeholder",
};
