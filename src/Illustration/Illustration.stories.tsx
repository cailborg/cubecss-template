import { Story, Meta } from "@storybook/react/types-6-0";
import { Illustration, IllustrationProps } from "./Illustration";

export default {
  title: "Components/Illustration",
  component: Illustration,
  argTypes:{
    monochrome:{
      control:false
    }
  }
} as Meta;

export const Color: Story<IllustrationProps> = (args) => <Illustration {...args}></Illustration>;
Color.args = { title:"Purchases", name: "Purchases" };

export const Monochrome: Story<IllustrationProps> = (args) => <Illustration {...args}></Illustration>;
Monochrome.args = { title:"Purchases", name: "Purchases", monochrome: true };
