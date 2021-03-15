import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";
import { Icon } from "../Icon/Icon";

export default {
  title: "Components/Button",
  component: Button,
  subcomponents: { Icon },
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.children}<Icon name ="ArrowRight"/></Button>;
Template.args = { children: 'Button Text' };

