import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checkedOptions, setCheckedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleChange = (option: string, checked: boolean) => {
    setCheckedOptions((prevOptions) => ({ ...prevOptions, [option]: checked }));
  };

  return (
    <div>
      <Checkbox
        label="Opção 1"
        checked={checkedOptions.option1}
        onChange={(checked) => handleChange("option1", checked)}
      />
      <Checkbox
        label="Opção 2"
        checked={checkedOptions.option2}
        onChange={(checked) => handleChange("option2", checked)}
      />
      <Checkbox
        label="Opção 3"
        checked={checkedOptions.option3}
        onChange={(checked) => handleChange("option3", checked)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Opção 1",
};

export const AriaLabel = Template.bind({});
AriaLabel.args = {
  label: "Opção 3",
  ariaLabel: "Select option 3",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Opção 4",
  checked: false,
};
