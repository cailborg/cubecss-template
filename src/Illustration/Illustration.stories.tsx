import { Story, Meta } from "@storybook/react/types-6-0";
import { Illustration, IllustrationProps } from "./Illustration";

export default {
  title: "Components/Illustration",
  component: Illustration,
  // argTypes: {
  //   title: { control: "text" },
  //   value: { control: "text" },
  // }
} as Meta;

export const Horizontal: Story<IllustrationProps> = (args) => <Illustration {...args}></Illustration>;
Horizontal.args = { title:"Purchases", name: "Purchases" };
