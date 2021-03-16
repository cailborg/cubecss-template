import { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Switch } from "./Switch";

export default {
    title: "Components/Switch",
    component: Switch,
} as Meta;

export const Standard = (args: any) => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
};
Standard.args = { label: "Label Text" };
