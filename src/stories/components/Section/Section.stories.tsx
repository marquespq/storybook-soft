import { Section } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ariaLabel: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    title: "Minha Seção",
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Title: Story = {
  args: {
    title: "Titulo teste",
    children: <div>custom children</div>,
    ariaLabel: "My Section",
  },
};
