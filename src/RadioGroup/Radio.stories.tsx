import { Story, Meta } from "@storybook/react/types-6-0";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    legend: { control: "text" },
  },
} as Meta;

export const RadioItem: Story<RadioProps> = (args) => <Radio {...args}></Radio>;
RadioItem.args = { title: 'Title of option'};