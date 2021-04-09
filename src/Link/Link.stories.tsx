import { Story, Meta } from "@storybook/react/types-6-0";
import { Link, LinkProps } from "./Link";
import { Text } from "../Text/Text";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

export const Standard: Story<LinkProps> = (args) => <Link {...args}></Link>;
Standard.args = { children: 'Example Text', size: "medium", target: "_self", inline: true };


export const Inline: Story<LinkProps> = (args) => <Text variant="body-1" className="text-sunrise-700"><Link {...args}></Link></Text>;
Inline.args = { children: 'Example Text', size: "medium", target: "_self", inline: true};