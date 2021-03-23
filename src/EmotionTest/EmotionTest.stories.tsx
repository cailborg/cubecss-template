import { Story, Meta } from "@storybook/react/types-6-0";
import { EmotionTest, TestProps } from "./EmotionTest";

export default {
  title: "Components/EmotionTest",
  component: EmotionTest,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

export const Main: Story<TestProps> = (args) => <EmotionTest {...args}>{args.children}</EmotionTest>;
Main.args = { label: 'Example Text', variant:"body-1", id:"someid"};