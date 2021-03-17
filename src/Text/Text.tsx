import React from "react";
import "./Text.scss";

export interface TextProps {
  variant?: "body1" | "body2" | "body3" | "caption" | "overline";
    children: React.ReactNode;
    tagName?: "p" | "span" | "strong" | "em";
    color?: string;
    alignment?: "left" | "right" | "center";
    id?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = "inherit",
  children,
  tagName = "span",
  color = "inherit",
  alignment = "inherit",
  id
}) => {
  const TextTag = tagName;
  return (
      <TextTag
          className={`${variant} ${color} ${alignment}
`}
          id={id}
      >
          {children}
      </TextTag>
  );
};
