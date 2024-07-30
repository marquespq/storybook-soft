import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import CheckPicker, { CheckPickerProps } from ".";

export default {
  title: "Components/CheckPicker",
  component: CheckPicker,
  tags: ["autodocs"],
  docs: {
    story: {
      inline: false,
      iframeHeight: 170,
    },
    autodocs: {
      showCode: false,
    },
  },
  source: {
    code: `
import React from 'react';
import { CheckPicker } from './CheckPicker';
 const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (values: string[]) => {
    setSelectedOptions(values);
  };
export default function Example() {
return (
  <CheckPicker {...args} value={selectedOptions} onChange={handleSelect} />
);
}
    `,
  },
  preview: {
    tab: "storybook",
    code: `
import React from 'react';
import { CheckPicker } from './CheckPicker';
 const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (values: string[]) => {
    setSelectedOptions(values);
  };
export default function Example() {
return (
  <CheckPicker {...args} value={selectedOptions} onChange={handleSelect} />
);
}
    `,
  },
} as Meta;

const Template: StoryFn<CheckPickerProps> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (values: string[]) => {
    setSelectedOptions(values);
  };

  return (
    <div>
      <CheckPicker {...args} value={selectedOptions} onChange={handleSelect} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ],
};

export const PreselectedOptions = Template.bind({});
PreselectedOptions.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ],
  value: ["option1", "option3"],
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ],
  placeholder: "Select your favorite options",
};
