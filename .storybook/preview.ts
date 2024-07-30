import type { Preview } from "@storybook/react";
import "../src/index.css";
const preview: Preview = {
  parameters: {
    title: "react-ui-softscript",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
