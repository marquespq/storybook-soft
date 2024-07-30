import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Progress, { ProgressProps } from ".";

export default {
  title: "Components/Progress",
  tags: ["autodocs"],
  component: Progress,
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    height: { control: "number" },
    width: { control: "number" },
    borderRadius: { control: "number" },
    animationDuration: { control: "number" },
  },
} as Meta;

const Template: StoryFn<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
  color: "#4CAF50",
  backgroundColor: "#E0E0E0",
  height: 10,
  width: 200,
  borderRadius: 5,
  animationDuration: 100,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  value: 75,
  max: 100,
  color: "#FF69B4",
  backgroundColor: "#333",
  height: 10,
  width: 200,
  borderRadius: 5,
  animationDuration: 100,
};

export const SmallProgress = Template.bind({});
SmallProgress.args = {
  value: 25,
  max: 100,
  color: "#4CAF50",
  backgroundColor: "#E0E0E0",
  height: 5,
  width: 100,
  borderRadius: 3,
  animationDuration: 100,
};

export const LargeProgress = Template.bind({});
LargeProgress.args = {
  value: 75,
  max: 100,
  color: "#4CAF50",
  backgroundColor: "#E0E0E0",
  height: 20,
  width: 400,
  borderRadius: 10,
  animationDuration: 100,
};

export const AnimatedProgress = Template.bind({});
AnimatedProgress.args = {
  value: 50,
  max: 100,
  color: "#4CAF50",
  backgroundColor: "#E0E0E0",
  height: 10,
  width: 200,
  borderRadius: 5,
  animationDuration: 500,
};
