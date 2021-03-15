import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Icon, IconProps } from "./Icon";
import data from "./iconsConfig.json";


export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: { control: {
      type: 'select',
      options: Object.keys(data),
    },},
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  name: "Cross",
};