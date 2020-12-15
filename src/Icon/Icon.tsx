import React from "react";
import data from "./iconsConfig.json";

export const IconDisplayName = "Icon";

export interface IconProps {
  name: keyof typeof data;
  label?: string;
}

const getIconConfig = (name: keyof typeof data) => {
  if (data.hasOwnProperty(name)) {
    return data[name];
  }
};

export const Icon: React.FC<IconProps> = ({
  name,
  label,
}) => {
  const values = getIconConfig(name) as { drawn: string; title: string };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
    >
      <title>{label ? label : values.title}</title>
      <path d={values.drawn} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
};
