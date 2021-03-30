import { Story, Meta } from "@storybook/react/types-6-0";
import { Tag, TagProps } from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

export const All: Story<TagProps> = (args) => <Tag {...args}></Tag>;
All.args = { label: 'Button Text' };

