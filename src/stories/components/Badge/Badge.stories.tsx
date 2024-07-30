import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Badge from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "New",
};

export const Customized = Template.bind({});
Customized.args = {
  text: "Sale",
  color: "#fff",
  backgroundColor: "#ff69b4",
  fontSize: "14px",
  padding: "6px 12px",
};

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  text: "Hot",
  ariaLabel: "Badge de alta prioridade",
};

export const WithCssClass = Template.bind({});
WithCssClass.args = {
  text: "Info",
  className: "y-badge-class",
};
