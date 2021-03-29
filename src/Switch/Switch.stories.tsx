import { Story, Meta } from "@storybook/react/types-6-0";
import { Switch, SwitchProps } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta;

export const Main: Story<SwitchProps> = (args) => <Switch {...args}></Switch>;
Main.args = { label: 'Example Text', size:"medium", id:"someid", className:"text-neutral-600"};