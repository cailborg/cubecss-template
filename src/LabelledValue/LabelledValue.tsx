import React, { useState } from "react";
import styled from "@emotion/styled";

type LabelledValueVariantType = "vertical" | "horizontal";
type LabelledValueSizeType = "large" | "small";

export interface LabelledValueProps {
    variant: LabelledValueVariantType;
    size?: LabelledValueSizeType;
    label: String;
    value: String;
    description?: String;
    secondaryValue?: String;
    emphasized?: boolean;
}

const Vertical = styled.div`
    display: flex;
    flex-direction: column;
`;

const Description = styled.span`
    font-family: var(--lp-fonts-caption);
    font-weight: var(--lp-font-weight-caption);
    font-size: var(--lp-font-size-caption);
    line-height: var(--lp-line-height-caption);
    letter-spacing: var(--lp-letter-spacing-caption);
    color: rgba(var(--lp-colors-neutral-600), 1);
`;

const Horizontal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > span {
        display: inline-block;
        position: relative;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-all;
        word-break: break-word;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
    }
`;

const LabelValue = styled.span<{ emphasized: boolean; size: string }>`
    font-family: var(--lp-fonts-body-3);
    font-weight: ${(props) =>
        props.emphasized
            ? "var(--lp-font-weight-body-3-bold)"
            : "var(--lp-font-weight-body-3)"};
    font-size: ${(props) =>
        props.size === "small"
            ? "var(--lp-font-size-body-3)"
            : "var(--lp-font-size-body-2)"};
    line-height: var(--lp-line-height-body-3);
    letter-spacing: var(--lp-letter-spacing-body-3);
    color: rgba(var(--lp-colors-neutral-800), 1);
`;

const SecondaryValue = styled.span`
    font-family: var(--lp-fonts-caption);
    font-weight: var(--lp-font-weight-caption);
    font-size: var(--lp-font-size-caption);
    line-height: var(--lp-line-height-caption);
    letter-spacing: var(--lp-letter-spacing-caption);
    color: rgba(var(--lp-colors-neutral-600), 1);
    display: inline-block;
    justify-content: flex-end;
    text-align: right;
`;

export const LabelledValue: React.FC<LabelledValueProps> = ({
    variant,
    size = "small",
    label,
    value,
    description,
    secondaryValue,
    emphasized = false,
}) => {
    const [ariaId] = useState(Date.now().toString());
    if (variant === "vertical") {
        return (
            <Vertical aria-live="polite" aria-atomic="true">
                <Description id={ariaId}>{label}</Description>
                <LabelValue
                    size={size}
                    emphasized={emphasized}
                    aria-labelledby={ariaId}
                >
                    {value}
                </LabelValue>
                {description && <Description>{description}</Description>}
            </Vertical>
        );
    }

    return (
        <div aria-live="polite" aria-atomic="true">
            <Horizontal>
                <LabelValue size={size} emphasized={emphasized} id={ariaId}>
                    {label}
                </LabelValue>
                <LabelValue
                    size={size}
                    emphasized={emphasized}
                    aria-labelledby={ariaId}
                >
                    {value}
                </LabelValue>
            </Horizontal>
            <Horizontal>
                {description && <Description>{description}</Description>}
                {secondaryValue && (
                    <SecondaryValue>{secondaryValue}</SecondaryValue>
                )}
            </Horizontal>
        </div>
    );
};
