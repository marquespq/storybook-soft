import { StoryFn, Meta } from "@storybook/react";
import { Table, TableProps } from ".";

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<TableProps> = (args: any) => (
  <Table {...args} aria-label="Table example" />
);

export const Default = Template.bind({});
Default.args = {
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
    ["Cell 7", "Cell 8", "Cell 9"],
  ],
};

export const WithLongHeaders = Template.bind({});
WithLongHeaders.args = {
  headers: ["Very Long Column 1", "Even Longer Column 2", "Short Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
    ["Cell 7", "Cell 8", "Cell 9"],
  ],
};

export const WithManyRows = Template.bind({});
WithManyRows.args = {
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
    ["Cell 7", "Cell 8", "Cell 9"],
    ["Cell 10", "Cell 11", "Cell 12"],
    ["Cell 13", "Cell 14", "Cell 15"],
  ],
};

export const WithStripedTheme = Template.bind({});
WithStripedTheme.args = {
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
    ["Cell 7", "Cell 8", "Cell 9"],
    ["Cell 10", "Cell 11", "Cell 12"],
    ["Cell 13", "Cell 14", "Cell 15"],
  ],
  theme: "dark",
};

export const ExpandableRows = Template.bind({});
ExpandableRows.args = {
  headers: ["Name", "Age", "Occupation"],
  rows: [
    ["John Doe", "30", "Software Engineer"],
    ["Jane Doe", "25", "Marketing Manager"],
    ["Bob Smith", "40", "CEO"],
  ],
  expandableColumns: ["Name"],
  expandedContent: (row) => (
    <div aria-label={`Expanded content for ${row[0]}`}>
      <p>Expanded content for {row[0]}</p>
      <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  ),
  theme: "light",
};

export const WithActionsColumn = Template.bind({});
WithActionsColumn.args = {
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
    ["Cell 7", "Cell 8", "Cell 9"],
  ],
  actionsColumn: {
    label: "Actions",
    actions: (row) => [
      <button
        key="edit"
        onClick={() => console.log(`Edit ${row[0]}`)}
        aria-label={`Edit ${row[0]}`}
      >
        Edit
      </button>,
      <button
        key="delete"
        onClick={() => console.log(`Delete ${row[0]}`)}
        aria-label={`Delete ${row[0]}`}
      >
        Delete
      </button>,
    ],
  },
};
export const WithBothFeatures = Template.bind({});
WithBothFeatures.args = {
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
    ["Cell 7", "Cell 8", "Cell 9"],
  ],
  expandedContent: (row) => (
    <div aria-label={`Expanded content for ${row[0]}`}>
      <p>Expanded content for {row[0]}</p>
      <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  ),
  expandableColumns: ["Column 1"],
  actionsColumn: {
    label: "Actions",
    actions: (row) => [
      <button
        key="edit"
        onClick={() => console.log(`Edit ${row[0]}`)}
        aria-label={`Edit ${row[0]}`}
      >
        Edit
      </button>,
      <button
        key="delete"
        onClick={() => console.log(`Delete ${row[0]}`)}
        aria-label={`Delete ${row[0]}`}
      >
        Delete
      </button>,
    ],
  },
};
