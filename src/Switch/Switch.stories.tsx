import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Switch, SwitchProps } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes:{
    onChange:{
      control:false
    }
  }
} as Meta;


export const Template: Story<SwitchProps> = (args) => <Switch {...args}/>;
Template.args = { label: 'Label Text' };
