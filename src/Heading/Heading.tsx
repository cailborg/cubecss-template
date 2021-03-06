/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from "react";

export interface HeadingProps {
    variant?: "jumbo" | "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
    children: React.ReactNode;
    tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    alignment?: "left" | "right" | "center";
    id?: string;
    className?: string;
}
export const Heading: React.FC<HeadingProps> = ({
    variant,
    children,
    tagName = "h1",
    alignment,
    id,
    className,
}) => {
    const Tag = tagName;
    return (
        <Tag className={className} id={id} css={css`
        text-align: ${alignment ?? "inherit"};
        font-family: var(--lp-fonts-heading-${variant});
        font-size: var(--lp-font-size-heading-${variant});
        line-height: var(--lp-line-height-heading-${variant});
        letter-spacing: var(--lp-letter-spacing-heading-${variant});
        font-weight: var(--lp-font-weight-heading-${variant});
        & + p {
            margin-top: var(--lp-paragraph-spacing-heading-${variant});
        }
      `}>{children}</Tag>
    );
};
