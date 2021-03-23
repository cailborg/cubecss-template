import React from "react";
import styled from "@emotion/styled";
import { Text } from "../Text/Text";
import { FocusRing } from "@react-aria/focus";

export interface SwitchProps {
    size: "large" | "medium" | "small";
    label?: string;
    id?: string;
    className?: string;
}

const getHeight = (size: string) => {
    switch (size) {
        case "small":
            return `var(--lp-space-sm)`;
        case "medium":
            return `var(--lp-space-md)`;
        case "large":
            return `var(--lp-space-lg)`;
        default:
            return `var(--lp-space-md)`;
    }
};

const getWidth = (size: string) => {
    switch (size) {
        case "small":
            return `var(--lp-space-lg)`;
        case "medium":
            return `var(--lp-space-xxl)`;
        case "large":
            return `calc(var(--lp-space-jumbo) - var(--lp-space-xxxs))`;
        default:
            return `var(--lp-space-xxl)`;
    }
};
const getMove = (size: string) => {
    switch (size) {
        case "small":
            return `calc(var(--lp-space-xs) - 2px)`;
        case "medium":
            return `calc(var(--lp-space-sm) - 4px)`;
        case "large":
            return `calc(var(--lp-space-md) - 6px)`;
        default:
            return `calc(var(--lp-space-sm) - 4px)`;
    }
};
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`;
const StyledDiv = styled.div<{ size: string }>`
    width: calc(100% - ${(props) => getHeight(props.size)});
`;
const StyledLabel = styled.label<{ size: string }>`
    position: relative;
    display: inline-block;
    width: ${(props) => getWidth(props.size)};
    height: ${(props) => getHeight(props.size)};
    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    & span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(var(--lp-colors-neutral-300), 1);
        -webkit-transition: var(--lp-durations-quick);
        transition: transform var(--lp-durations-quick) ease-in-out, background-color var(--lp-durations-quick) ease-in-out;
        border-radius: 24px;
    }
    & span:before {
        position: absolute;
        content: "";
        box-sizing: border-box;
        border: rgba(var(--lp-colors-neutral-300), 1) var(--lp-border-widths-thick) var(--lp-border-styles-solid);
        height: ${(props) => getHeight(props.size)};
        width: ${(props) => getHeight(props.size)};
        left: 0px;
        top: 0px;
        background-color: rgba(var(--lp-colors-neutral-50), 1);
        -webkit-transition: var(--lp-durations-quick);
        transition: transform var(--lp-durations-quick) ease-in-out, background-color var(--lp-durations-quick) ease-in-out;
        border-radius: 24px;
    }
    & input:checked + span {
        background-color: rgba(var(--lp-colors-primary), 1);
    }

    & input:focus.focus-ring + span {
        box-shadow: var(--lp-focus-ring);
    }

    & input:checked + span:before {
        background-color: white;
        box-shadow: var(--lp-shadows-low);
        border-color: rgba(var(--lp-colors-primary), 1);
        -webkit-transform: translateX(
            ${(props) => getMove(props.size)}
        );
        -ms-transform: translateX(
            ${(props) => getMove(props.size)}
        );
        transform: translateX(${(props) => getMove(props.size)});
    }
`;

export const Switch: React.FC<SwitchProps> = ({
    size,
    label,
    id,
    className
}) => {
    return (
        <StyledContainer>
            <StyledDiv size={size}>
                <Text id={id} variant="body-2" className={className}>
                    {label}
                </Text>
            </StyledDiv>
            <StyledLabel size={size}>
                <FocusRing focusRingClass="focus-ring">
                    <input type="checkbox" aria-labelledby={id} />
                </FocusRing>
                <span></span>
            </StyledLabel>
        </StyledContainer>
    );
};
