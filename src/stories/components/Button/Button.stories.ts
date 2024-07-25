import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "danger"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};
