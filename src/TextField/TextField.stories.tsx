import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputField, TextFieldProps } from "./TextField";

export default {
  title: "Components/TextField",
  component: InputField,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <InputField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: "TextField Label",
};
