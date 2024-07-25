import { StoryFn, Meta } from "@storybook/react";
import { Row, RowProps } from ".";

export default {
  title: "Components/Row",
  component: Row,
  tags: ["autodocs"],
  argTypes: {
    gutters: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg"],
      },
    },
  },
} as Meta;

const Template: StoryFn<RowProps> = (args) => <Row {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <div className="w-40 bg-red-500 h-20">Column 1</div>
      <div className="w-40 bg-blue-500 h-20">Column 2</div>
    </div>
  ),
};

export const WithGutters = Template.bind({});
WithGutters.args = {
  ...Default.args,
  gutters: "md",
  className: "gx-4",
};
