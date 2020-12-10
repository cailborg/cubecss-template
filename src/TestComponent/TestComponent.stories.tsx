import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TestComponent, TestComponentProps } from "./TestComponent";

export default {
  title: "Components/TestComponent",
  component: TestComponent,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

const Template: Story<TestComponentProps> = (args) => <TestComponent {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: "Button text",
};
