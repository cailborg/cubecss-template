import React from "react";
import "./Switch.scss";
import { FocusRing } from "@react-aria/focus";

export interface SwitchProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
    label?: string;
    trackingId?: string;
    size: "large" | "medium" | "small";
}

export const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
    disabled,
    label,
    trackingId,
    size = "large",
}) => {
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

    return (
        <div aria-live="polite" aria-atomic="true" className="toggle">
            {label && <label className="font-body text-neutral-800 font-normal">{label}</label>}
            <FocusRing focusRingClass="focus-ring">
                <button
                    type="button"
                    role="switch"
                    aria-checked={!disabled && checked}
                    onClick={() => onChange(!checked)}
                    className={`switch ${size}`}
                    disabled={disabled}
                    data-tracking-id={trackingId}
                >
                    <span className="visually-hidden">{status}</span>
                    <span className={`${status}Slider`}></span>
                </button>
            </FocusRing>
        </div>
    );
};
