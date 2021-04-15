import { Story, Meta } from "@storybook/react/types-6-0";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";
import { RadioItem } from "./Radio.stories";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    legend: { control: "text" },
  },
} as Meta;

export const Standard: Story<RadioGroupProps> = (args) => <RadioGroup {...args}><RadioItem {...RadioItem.args} /></RadioGroup>;
Standard.args = { legend: 'Radio group legend'};