import { StoryFn, Meta } from "@storybook/react";
import { Modal } from ".";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "largeDesktop",
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
      autodocs: {
        showCode: false,
      },
    },
    source: {
      code: `
import React from 'react';
import { Modal } from './Modal';

export default function Example() {
  return (
    <Modal
      isOpen={true}
      onClose={() => console.log('Modal closed')}
      size="md"
      title="Modal title"
    >
      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        Your modal content here Your modal content here
      </p>
    </Modal>
  );
}
      `,
    },
    preview: {
      tab: "storybook",
      code: `
import React from 'react';
import { Modal } from './Modal';

export default function Example() {
  return (
    <Modal
      isOpen={true}
      onClose={() => console.log('Modal closed')}
      size="md"
      title="Modal title"
    >
      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        Your modal content here Your modal content here
      </p>
    </Modal>
  );
}
      `,
    },
  },
} as Meta;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => console.log("Modal closed"),
  size: "md",
  title: "Modal title",
  children: (
    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
      Your modal content here Your modal content here
    </p>
  ),
};

export const Large = Template.bind({});
Large.args = {
  isOpen: true,
  onClose: () => console.log("Modal closed"),
  size: "lg",
  title: "Modal title",
  children: (
    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
      Your modal content here Your modal content here Your modal content here
      Your modal content here Your modal content here Your modal content here
      Your modal content here Your modal content here Your modal content here
      Your modal content here
    </p>
  ),
};

export const Small = Template.bind({});
Small.args = {
  isOpen: true,
  onClose: () => console.log("Modal closed"),
  size: "sm",
  title: "Modal title",
  children: (
    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
      Your modal content here
    </p>
  ),
};

Default.parameters = {
  source: {
    code: `
      import React from 'react';
      import { Modal } from './Modal';
      
      export default function Example() {
        return (
          <Modal
            isOpen={true}
            onClose={() => console.log('Modal closed')}
            size="md"
            title="Modal title"
          >
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              Your modal content here Your modal content here
            </p>
          </Modal>
        );
      }
            `,
  },
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  isOpen: true,
  onClose: () => console.log("Modal closed"),
  size: "md",
  title: "Modal title",
  children: (
    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
      Your modal content here Your modal content here
    </p>
  ),
  footer: (
    <p className="p-4 text-blueGray-500 text-lg leading-relaxed">
      This is the modal footer
    </p>
  ),
};
