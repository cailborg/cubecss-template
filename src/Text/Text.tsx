import React from "react";
import styled from "@emotion/styled";

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
    const TextTag = styled.span`
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
    `;
    return (
        <TextTag className={className} as={`${tagName}`} id={id}>
            {children}
        </TextTag>
    );
};
