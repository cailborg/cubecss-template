import { blue } from "@material-ui/core/colors";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

export const Sentence: Story<TextProps> = (args) => <Text {...args}>{args.children}</Text>;
Sentence.args = { children: 'Example Text', variant:"body1", tagName:"p", alignment: "left" };

export const Paragraph: Story<TextProps> = (args) => <div><Text {...args}>{args.children}</Text> <Text {...args}>{args.children}</Text></div>;
Paragraph.args = { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet urna sed leo laoreet scelerisque. Pellentesque condimentum arcu lacinia lacus pulvinar scelerisque. Proin interdum, erat auctor iaculis blandit, mi tellus sollicitudin dui, nec imperdiet mauris lorem non nisl. Etiam libero ex, posuere at maximus quis, sagittis eleifend felis. Nam non leo est. Suspendisse potenti. Suspendisse feugiat, mauris sed iaculis tincidunt, risus ex blandit nibh, quis bibendum ligula tortor ac nibh. Mauris vel fringilla felis. Donec quis vestibulum lacus.", variant:"body3", tagName:"p", alignment: "left" };