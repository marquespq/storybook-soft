import React from "react";
import { StoryFn } from "@storybook/react";
import Toast, { ToastProps } from ".";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
      autodocs: {
        showCode: false,
      },
    },
  },
};

const Template: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "This is a success notification!",
  type: "success",
  onClose: () => alert("Notification closed!"),
  align: "left",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning notification!",
  type: "warning",
  onClose: () => alert("Notification closed!"),
  align: "center",
};

export const Error = Template.bind({});
Error.args = {
  message: "This is an error notification!",
  type: "error",
  onClose: () => alert("Notification closed!"),
  align: "right",
};

export const CloseNotification = Template.bind({});
CloseNotification.args = {
  message: "This is a notification that can be closed!",
  type: "success",
  onClose: () => alert("Notification closed!"),
  align: "center",
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  message: "This is a notification aligned to the left!",
  type: "success",
  onClose: () => {},
  align: "left",
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  message: "This is a notification aligned to the center!",
  type: "success",
  onClose: () => {},
  align: "center",
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  message: "This is a notification aligned to the right!",
  type: "success",
  onClose: () => {},
  align: "right",
};
