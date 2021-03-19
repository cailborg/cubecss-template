import React from "react";
// import "./Switch.scss";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { FocusRing } from "@react-aria/focus";
import { Text } from "../Text/Text";

export interface SwitchProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    label?: string;
    trackingId?: string;
    size: "large" | "medium" | "small";
}
const getSize = (size: string) => {
    switch (size) {
        case "small":
            return `width: 40px;
            height: 24px;
            & > span:last-child {
              width: 24px;
              border-width: var(--lp-border-widths-thin);
            }
            &[aria-checked="true"] > span:last-child {
              -webkit-transform: translateX(16px);
              -ms-transform: translateX(16px);
              transform: translateX(16px);
            }`;
        case "medium":
            return `width: 56px;
            height: 32px;
            & > span:last-child {
              width: 32px;
            }
            &[aria-checked="true"] > span:last-child {
              -webkit-transform: translateX(24px);
              -ms-transform: translateX(24px);
              transform: translateX(24px);
            }`;
        case "large":
            return `width: 72px;
            height: 40px;
            border-radius: 32px;
            & > span:last-child {
              width: 40px;
            }
            &[aria-checked="true"] > span:last-child {
              -webkit-transform: translateX(32px);
              -ms-transform: translateX(32px);
              transform: translateX(32px);
            }`;
        default:
            return `width: 72px;
            height: 40px;
            border-radius: 32px;
            & > span:last-child {
              width: 40px;
            }
            &[aria-checked="true"] > span:last-child {
              -webkit-transform: translateX(32px);
              -ms-transform: translateX(32px);
              transform: translateX(32px);
            }`;
    }
};

const getStatus = (status: string) => {
    switch (status) {
        case "unchecked":
            return `background-color: rgba(var(--lp-colors-neutral-50), 1);
            border-color: rgba(var(--lp-colors-neutral-300), 1);`;
        case "checked":
            return `background-color: white;
            border-color: rgba(var(--lp-colors-primary), 1);
            box-shadow: var(--lp-shadows-low);`;
        case "disabled":
            return `background-color: rgba(var(--lp-colors-neutral-400),1);`;
        default:
            return `background-color: rgba(var(--lp-colors-neutral-50), 1);
            border-color: rgba(var(--lp-colors-neutral-300), 1);`;
    }
};

export const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
    disabled,
    label,
    trackingId,
    size = "large",
}) => {
    const Toggle = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & label {
            width: calc(100% - 56px - var(--lp-space-xs));
            margin: 0;
            text-align: left;
        }
    `;
    const fadeIn = keyframes`
        from {
            background-color: rgba(var(--lp-colors-neutral-300), 1);
        }

        to {
            background-color: rgba(var(--lp-colors-primary), 1);
        }
        `;
    const fadeOut = keyframes`
    from {
        background-color: rgba(var(--lp-colors-primary), 1);
    }

    to {
        background-color: rgba(var(--lp-colors-neutral-300), 1);
    }
    `;
    const Switch = styled.button`
        margin: 0;
        padding: 0;
        border-radius: var(--lp-radii-lg);
        position: relative;
        cursor: pointer;
        animation: ${fadeOut} var(--lp-durations-quick) ease-in-out ;
        &.focus-ring {
            box-shadow: 0 0 0 2px white, 0 0 0 6px dodgerblue;
        }
        & > * {
            pointer-events: none;
        }
        &:focus {
            outline-width: 0;
        }
        &[aria-checked="true"] {
            animation: ${fadeIn} var(--lp-durations-quick) ease-in-out ;
            background-color: rgba(var(--lp-colors-primary), 1);
        }
        &[aria-checked="false"] {
            animation: ${fadeOut} var(--lp-durations-quick) ease-in-out ;
            background-color: rgba(var(--lp-colors-neutral-300), 1);
        }
        ${getSize(size)};
    `;
    
    let status;
    switch (true) {
        case disabled:
            status = "disabled";
            break;
        case checked:
            status = "checked";
            break;
        default:
            status = "unchecked";
            break;
    }
    const Slider = styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        -webkit-transition: var(--lp-durations-quick);
        transition: var(--lp-durations-quick);
        border-radius: 50%;
        border-width: var(--lp-border-widths-thick);
        border-color: rgba(var(--lp-colors-neutral-900), 1);
        ${getStatus(status)};
    `;

    return (
        <Toggle aria-live="polite" aria-atomic="true">
            {label && (
                <label>
                    <Text variant="body-2" className="text-neutral-800">
                        {label}
                    </Text>
                </label>
            )}
            <FocusRing focusRingClass="focus-ring">
                <Switch
                    type="button"
                    role="switch"
                    aria-checked={!disabled && checked}
                    onClick={() => onChange(!checked)}
                    disabled={disabled}
                    data-tracking-id={trackingId}
                >
                    <span className="visually-hidden">{status}</span>
                    <Slider></Slider>
                </Switch>
            </FocusRing>
        </Toggle>
    );
};
