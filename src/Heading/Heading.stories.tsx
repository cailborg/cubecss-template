import { Story, Meta } from "@storybook/react/types-6-0";
import { Heading, HeadingProps } from "./Heading";
import { Text } from "../Text/Text"

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

export const Standard: Story<HeadingProps> = (args) => <Heading {...args}>{args.children}</Heading>;
Standard.args = { children: 'Example Text', variant:"jumbo", tagName:"h1", alignment: "left" };

export const withText: Story<HeadingProps> = (args) => <><Heading {...args}>{args.children}</Heading><Text variant="body-1" tagName="p">Here is a paragrah</Text></>;
withText.args = { children: 'Example Text', variant:"jumbo", tagName:"h1", alignment: "left" };