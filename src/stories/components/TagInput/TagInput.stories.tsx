import React from "react";
import { StoryFn, Meta, ArgTypes } from "@storybook/react";
import { TagInput, TagInputProps } from ".";

export default {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "array" },
    } as unknown as ArgTypes<TagInputProps>["value"],
    onChange: { action: "onChange" } as ArgTypes<TagInputProps>["onChange"],
    placeholder: {
      control: { type: "text" },
    } as ArgTypes<TagInputProps>["placeholder"],
    maxTags: {
      control: { type: "number" },
    } as ArgTypes<TagInputProps>["maxTags"],
  },
} as Meta<TagInputProps>;

const Template: StoryFn<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: ["tag1", "tag2"],
  onChange: (tags) => console.log("onChange", tags),
  placeholder: "Adicione uma tag",
  maxTags: 10,
  ariaLabel: "Input tags",
  ariaDescribedby: "input-tags",
};

export const WithManyTags = Template.bind({});
WithManyTags.args = {
  value: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  onChange: (tags) => console.log("onChange", tags),
  placeholder: "Adicione uma tag",
  maxTags: 10,
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  value: ["tag1", "tag2"],
  onChange: (tags) => console.log("onChange", tags),
  placeholder: "Insira suas habilidades",
  maxTags: 10,
};

export const WithLimitedTags = Template.bind({});
WithLimitedTags.args = {
  value: ["tag1", "tag2"],
  onChange: (tags) => console.log("onChange", tags),
  placeholder: "Adicione uma tag",
  maxTags: 3,
};

export const WithCustomInput = Template.bind({});
WithCustomInput.args = {
  value: ["tag1", "tag2"],
  onChange: (tags) => console.log("onChange", tags),
  placeholder: "Adicione uma tag",
  maxTags: 10,
  classNameTags: "bg-pink-200 rounded px-2 py-1 mr-2 mb-2",
  className:
    'w-full h-10 pl-4 pr-10 text-sm leading-5 text-red-800 rounded-md border border-red-200 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"',
};
