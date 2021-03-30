import { Story, Meta } from "@storybook/react/types-6-0";
import { LabelledValue, LabelledValueProps } from "./LabelledValue";

export default {
  title: "Components/LabelledValue",
  component: LabelledValue,
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    description: { control: "text" },
    secondaryValue: { control: "text" },
  }
} as Meta;

export const Horizontal: Story<LabelledValueProps> = (args) => <LabelledValue {...args}></LabelledValue>;
Horizontal.args = { label:"Label", variant: "horizontal", value: "value", description: "description", secondaryValue: "secondaryValue", emphasized: false };

export const Vertical: Story<LabelledValueProps> = (args) => <LabelledValue {...args}></LabelledValue>;
Vertical.args = { label:"Label", variant: "vertical", value: "value", description: "description", secondaryValue: "secondaryValue", emphasized: false };

