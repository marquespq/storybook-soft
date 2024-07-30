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
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    ariaLabel: {
      control: "text",
    },
    title: {
      control: "text",
    },
    tabIndex: {
      control: "number",
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
    ariaLabel: "Primary Button",
    title: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
    ariaLabel: "Secondary Button",
    title: "Secondary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success Button",
    ariaLabel: "Success Button",
    title: "Success Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger Button",
    ariaLabel: "Danger Button",
    title: "Danger Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
    ariaLabel: "Large Button",
    title: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
    ariaLabel: "Small Button",
    title: "Small Button",
  },
};

export const CustomStyle: Story = {
  args: {
    label: "Custom Style Button",
    ariaLabel: "Custom Style Button",
    title: "Custom Style Button",
    className: "bg-orange-500 hover:bg-orange-700 text-white",
  },
};

export const CustomStyleWithStyle: Story = {
  args: {
    label: "Custom Style Button with Style",
    ariaLabel: "Custom Style Button with Style",
    title: "Custom Style Button with Style",
    style: {
      backgroundColor: "pink",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
    },
  },
};
