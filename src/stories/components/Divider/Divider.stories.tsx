import React, { StoryFn } from "@storybook/react";
import { Divider, DividerProps } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
};

const Template: StoryFn<DividerProps> = (args: any) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
};

export const CustomizedHorizontal = Template.bind({});
CustomizedHorizontal.args = {
  width: "50%",
  color: "#333",
  style: "dashed",
};
