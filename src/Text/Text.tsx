/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from "react";

export interface TextProps {
    variant?: "body-1" | "body-2" | "body-3" | "caption" | "overline";
    children: React.ReactNode;
    tagName?: "p" | "span";
    alignment?: "left" | "right" | "center";
    id?: string;
    isEmphasised?: boolean;
    className?: string;
}

export const Text: React.FC<TextProps> = ({
    variant,
    children,
    tagName = "p",
    alignment,
    id,
    className,
    isEmphasised = false,
}) => {
    const Tag = tagName;
    return (
        <Tag className={className} id={id} css={css`
        text-align: ${alignment ?? "inherit"};
        font-family: var(--lp-fonts-${variant});
        font-size: var(--lp-font-size-${variant});
        line-height: var(--lp-line-height-${variant});
        letter-spacing: var(--lp-letter-spacing-${variant});
        text-transform: var(--lp-text-transform-${variant});
        + p {
            margin-top: var(--lp-paragraph-spacing-${variant});
        }
        font-weight: ${isEmphasised ? "700" : "400"};
      `}>{children}</Tag>
    );
};
