import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "text"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "radio" },
      options: ["blue", "red", "green"],
    },
    text: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "medium",
  color: "blue",
  text: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "medium",
  color: "red",
  text: "Secondary Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  size: "medium",
  color: "green",
  text: "Text Button",
};
