import React from "react";
import styled from "@emotion/styled";

export interface TextProps {
    variant?: "body1" | "body2" | "body3" | "caption" | "overline";
    children: React.ReactNode;
    tagName?: "p" | "span";
    alignment?: "left" | "right" | "center";
    id?: string;
    isEmphasised: boolean;
    className?: string;
}

const getVariant = (variant: TextProps["variant"]) => {
  switch (variant) {
      case "body1":
          return `font-family: var(--lp-fonts-body-1);
          font-size: var(--lp-font-size-body-1);
          line-height: var(--lp-line-height-body-1);
          letter-spacing: var(--lp-letter-spacing-body-1)`;
      case "body2":
          return `font-family: var(--lp-fonts-body-2);
          font-size: var(--lp-font-size-body-2);
          line-height: var(--lp-line-height-body-2);
          letter-spacing: var(--lp-letter-spacing-body-2);`
      case "body3":
          return `font-family: var(--lp-fonts-body-3);
          font-size: var(--lp-font-size-body-3);
          line-height: var(--lp-line-height-body-3);
          letter-spacing: var(--lp-letter-spacing-body-3);`;
      case "caption":
          return `font-family: var(--lp-fonts-caption);
          font-size: var(--lp-font-size-caption);
          line-height: var(--lp-line-height-caption);
          letter-spacing: var(--lp-letter-spacing-caption);`;
      case "overline":
          return `font-family: var(--lp-fonts-overline);
          font-size: var(--lp-font-size-overline);

          line-height: var(--lp-line-height-overline);
          letter-spacing: var(--lp-letter-spacing-overline);
          text-transform: uppercase`;
      default:
          return `font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          letter-spacing: inherit;`;
  }
};

export const Text: React.FC<TextProps> = ({
    variant,
    children,
    tagName = "span",
    alignment,
    id,
    className,
    isEmphasised
}) => {
    
    const TextTag = styled.span`
        text-align: ${alignment ?? "inherit"};
        ${getVariant(variant)};
        font-weight: ${isEmphasised ? '700' : '400'};
    `;
    return (
        <TextTag
        className={className}
        as={`${tagName}`}
        id={id}
        >
            {children}
        </TextTag>
    );
};
