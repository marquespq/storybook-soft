import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Uploader } from ".";

export default {
  title: "Components/Uploader",
  component: Uploader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof Uploader> = (args) => <Uploader {...args} />;

export const Upload = Template.bind({});
Upload.args = {
  uploadUrl: "https://example.com/upload",
  onUpload: (file: File) => console.log(`File uploaded: ${file.name}`),
  onError: (error: Error) =>
    console.error(`Error uploading file: ${error.message}`),
  buttonText: "Upload File",
  buttonClass: "btn btn-primary",
  styles: {
    container: { backgroundColor: "#f0f0f0" },
    label: { color: "#333" },
    button: { backgroundColor: "#4CAF50" },
  },
  acceptedFileTypes: "image/jpeg, image/png",
};

export const UploadWithCustomLabel = Template.bind({});
UploadWithCustomLabel.args = {
  onUpload: (file: File) => console.log(`File uploaded: ${file.name}`),
  onError: (error: Error) =>
    console.error(`Error uploading file: ${error.message}`),
  buttonText: "Upload File",
  buttonClass: "btn btn-primary",
  styles: {
    container: { backgroundColor: "#f0f0f0" },
    label: { color: "#333", fontSize: 18 },
    button: { backgroundColor: "#4CAF50" },
  },
  acceptedFileTypes: "image/jpeg, image/png",
};

export const UploadWithMultipleFiles = Template.bind({});
UploadWithMultipleFiles.args = {
  uploadUrl: "https://example.com/upload",
  onUpload: (file: File) => console.log(`File uploaded: ${file.name}`),
  onError: (error: Error) =>
    console.error(`Error uploading file: ${error.message}`),
  buttonText: "Upload Files",
  buttonClass: "btn btn-primary",
  styles: {
    container: { backgroundColor: "#f0f0f0" },
    label: { color: "#333" },
    button: { backgroundColor: "#4CAF50" },
  },
  acceptedFileTypes: "image/jpeg, image/png, application/pdf",
};

export const UploadWithErrorHandling = Template.bind({});
UploadWithErrorHandling.args = {
  uploadUrl: "https://example.com/upload",
  onUpload: (file: File) => console.log(`File uploaded: ${file.name}`),
  onError: (error: Error) => {
    console.error(`Error uploading file: ${error.message}`);
    alert(`Error: ${error.message}`);
  },
  buttonText: "Upload File",
  buttonClass: "btn btn-primary",
  styles: {
    container: { backgroundColor: "#f0f0f0" },
    label: { color: "#333" },
    button: { backgroundColor: "#4CAF50" },
  },
  acceptedFileTypes: "image/jpeg, image/png",
};
