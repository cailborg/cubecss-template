import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InputField, InputFieldProps } from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: "TextField Label",
};
