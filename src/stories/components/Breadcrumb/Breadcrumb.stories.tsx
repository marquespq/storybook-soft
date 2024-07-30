import { StoryFn, Meta } from "@storybook/react";

import Breadcrumb from ".";

export default {
  title: "Components/Breadcrumb",
  tags: ["autodocs"],
  component: Breadcrumb,
} as Meta;

const Template: StoryFn<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Início" },
    { label: "Produtos", url: "https://example.com/produtos" },
    { label: "Detalhes do produto" },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { label: "Início" },
    { label: "Produtos", url: "https://example.com/produtos" },
    { label: "Detalhes do produto" },
  ],
  separator: " > ",
};
