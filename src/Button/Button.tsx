import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { FocusRing } from "@react-aria/focus";

export interface ButtonProps {
    trackingId?: string;
    variant: "primary" | "reversed" | "destructive" | "ghost";
    size: "large" | "medium" | "small";
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: ReactNode;
    ariaLabel?: string;
}

const getSize = (size: string) => {
    switch (size) {
        case "small":
            return `height: var(--lp-space-md);
          font-size: var(--lp-font-size-button-sm);
          font-weight: var(--lp-font-weight-button-sm);
          line-height: var(--lp-line-height-button-sm);
          letter-spacing: var(--lp-letter-spacing-button-sm);
          padding: 0 var(--lp-space-xs);
          min-width: 96px;`;
        case "medium":
            return `height: var(--lp-space-lg);
          font-size: var(--lp-font-size-button-md);
          font-weight: var(--lp-font-weight-button-md);
          line-height: var(--lp-line-height-button-md);
          letter-spacing: var(--lp-letter-spacing-button-md);
          padding: 0 var(--lp-space-xs);
          min-width: 160px;`;
        case "large":
            return `height: var(--lp-space-xxl);
          font-size: var(--lp-font-size-button-lg);
          font-weight: var(--lp-font-weight-button-lg);
          line-height: var(--lp-line-height-button-lg);
          letter-spacing: var(--lp-letter-spacing-button-lg);
          padding: 0 var(--lp-space-md);`;
        default:
            return `height: var(--lp-space-lg);
          font-size: var(--lp-font-size-button-md);
          font-weight: var(--lp-font-weight-button-md);
          line-height: var(--lp-line-height-button-md);
          letter-spacing: var(--lp-letter-spacing-button-md);
          padding: 0 var(--lp-space-xs);
          min-width: 160px;`;
    }
};

const StyledButton = styled.button<{ size: string }>`
    color: white;
    background-color: white;
    & svg {
        fill: white;
        margin-left: var(--lp-space-xxxs);
    }
    &:focus {
        outline: none;
    }
    &:active {
        position: relative;
        &::before {
            content: "";
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            background: black;
            border-radius: var(--lp-radii-sm);
        }
    }
    ${(props) => getSize(props.size)};
    &[data-variant="primary"] {
        background: rgba(var(--lp-colors-primary), 1);
        &:hover,
        &:active {
            background: rgba(var(--lp-colors-primary), 0.8);
        }
    }
    &[data-variant="reversed"] {
        background: rgba(var(--lp-colors-neutral-50), 1);
        color: rgba(var(--lp-colors-primary), 1);
        & svg {
            fill: rgba(var(--lp-colors-primary), 1);
        }
        &:hover {
            background: white;
        }
        &:active {
            background: rgba(var(--lp-colors-neutral-100), 1);
        }
    }
    &[data-variant="destructive"] {
        background: rgba(var(--lp-colors-persimmon-600), 1);
        color: rgba(var(--lp-colors-neutral-900), 1);
        & svg {
            fill: rgba(var(--lp-colors-neutral-900), 1);
        }
        &:hover {
            background: rgba(var(--lp-colors-persimmon-500), 1);
        }
        &:active {
            background: rgba(var(--lp-colors-persimmon-700), 1);
        }
    }
    &[data-variant="ghost"] {
        background: none;
        color: rgba(var(--lp-colors-primary), 1);
        & svg {
            fill: rgba(var(--lp-colors-primary), 1);
            transition: margin-left var(--lp-durations-immediate) ease-in-out;
        }
        &:hover,
        &:active {
            color: rgba(var(--lp-colors-primary), 0.8);
            & svg {
                margin-left: var(--lp-space-xxs);
            }
        }
        &:active {
            &::before {
                background: none;
            }
        }
    }
    &:disabled {
        background: rgba(var(--lp-colors-neutral-50), 1);
        color: rgba(var(--lp-colors-neutral-400), 1);
        & svg {
            fill: rgba(var(--lp-colors-neutral-400), 1);
        }
    }
    &.focus-ring {
        box-shadow: var(--lp-focus-ring);
    }
`;

export const Button: React.FC<ButtonProps> = ({
    trackingId,
    variant = "primary",
    type,
    disabled,
    size = "large",
    onClick,
    ariaLabel,
    children,
}) => {
    return (
        <FocusRing focusRingClass="focus-ring">
            <StyledButton
                size={size}
                className={`button flex justify-center items-center min-w-xs rounded-sm transition-all cursor-pointer box-border font-button ${size}`}
                data-variant={variant}
                disabled={disabled}
                type={type}
                onClick={onClick}
                data-tracking-id={trackingId}
                aria-label={ariaLabel}
            >
                {children}
            </StyledButton>
        </FocusRing>
    );
};
