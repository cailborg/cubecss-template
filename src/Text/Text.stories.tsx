import { Story, Meta } from "@storybook/react/types-6-0";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

export const All: Story<TextProps> = (args) => <Text {...args}>{args.children}</Text>;
All.args = { children: 'Example Text' };

