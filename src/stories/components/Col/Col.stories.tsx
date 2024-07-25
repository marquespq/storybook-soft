import { StoryFn, Meta } from "@storybook/react";
import Col, { ColProps } from ".";

export default {
  title: "Components/Col",
  component: Col,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ColProps> = (args) => <Col {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="bg-red-500 h-20">Column 1</div>,
  xs: 6,
};

export const Responsive = Template.bind({});
Responsive.args = {
  children: <div className="bg-blue-500 h-20">Column 2</div>,
  xs: 6,
  sm: 4,
  md: 3,
  lg: 2,
  xl: 1,
};

export const WithOffset = Template.bind({});
WithOffset.args = {
  children: <div className="bg-green-500 h-20">Column 3</div>,
  xs: 4,
  sm: 3,
  md: 2,
  lg: 1,
  xl: 1,
  className: "d:offset-1",
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  children: (
    <div className="flex flex-wrap">
      <Col xs={6}>
        <div className="bg-red-500 h-20">Column 1</div>
      </Col>
      <Col xs={6}>
        <div className="bg-blue-500 h-20">Column 2</div>
      </Col>
    </div>
  ),
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: (
    <div className="flex flex-wrap">
      <Col xs={4}>
        <div className="bg-red-500 h-20">Column 1</div>
      </Col>
      <Col xs={4}>
        <div className="bg-blue-500 h-20">Column 2</div>
      </Col>
      <Col xs={4}>
        <div className="bg-green-500 h-20">Column 3</div>
      </Col>
    </div>
  ),
};

export const ResponsiveColumns = Template.bind({});
ResponsiveColumns.args = {
  children: (
    <div className="flex flex-wrap">
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <div className="bg-red-500 h-20 ">Column 1</div>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <div className="bg-blue-500 h-20">Column 2</div>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <div className="bg-green-500 h-20">Column 3</div>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <div className="bg-black h-20 text-white">Column 3</div>
      </Col>
    </div>
  ),
};