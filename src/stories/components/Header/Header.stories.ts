import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Header } from ".";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
    ariaLabel: "Logged in header",
  },
};

export const LoggedOut: Story = {
  args: {
    ariaLabel: "Logged out header",
  },
};

export const CustomImage: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIP1WY07exNBXDdKoy75b5NDZXkfWmE9Y1BQ&s",
    ariaLabel: "Custom image header",
  },
};
