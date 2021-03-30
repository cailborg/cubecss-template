import React from "react";
import styled from "@emotion/styled";

export interface TagProps {
    variant: "positive" | "neutral" | "warning" | "negative";
    size: "large" | "medium" | "small";
    label: string;
}

const getSize = (size: string) => {
    switch (size) {
        case "small":
            return `font-size: var(--lp-font-size-legal);
            font-weight: var(--lp-font-weight-legal-bold);
            line-height: var(--lp-line-height-legal);
            letter-spacing: var(--lp-letter-spacing-legal);
            padding: 2px 6px;`;
        case "medium":
            return `font-size: var(--lp-font-size-caption);
            font-weight: var(--lp-font-weight-caption-bold);
            line-height: var(--lp-line-height-caption);
            letter-spacing: var(--lp-letter-spacing-caption);
            padding: 4px 8px`;
        case "large":
            return `font-size: var(--lp-font-size-body-3);
            font-weight: var(--lp-font-weight-body-3-bold);
            line-height: var(--lp-line-height-body-3);
            letter-spacing: var(--lp-letter-spacing-body-3);
            padding: 4px 8px`;
        default:
            return `var(--lp-space-md)`;
    }
};

const StyledSpan = styled.span<{ size: string }>`
    display: inline-flex;
    border-radius: var(--lp-radii-lg);
    color: rgba(var(--lp-colors-neutral-800), 1);
    ${(props) => getSize(props.size)};
    &[data-variant="positive"] {
        background: rgba(var(--lp-colors-sky-500), 1);
    }
    &[data-variant="neutral"] {
        background: rgba(var(--lp-colors-neutral-200), 1);
    }
    &[data-variant="warning"] {
        background: rgba(var(--lp-colors-sunrise-500), 1);
    }
    &[data-variant="negative"] {
        background: rgba(var(--lp-colors-persimmon-500), 1);
    }
`;

export const Tag: React.FC<TagProps> = ({
    variant = "primary",
    size = "large",
    label,
}) => {
    return (
        <StyledSpan size={size} aria-live="polite" data-variant={variant}>
            {label}
        </StyledSpan>
    );
};
