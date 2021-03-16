import React from "react";
import "./Switch.scss";
// import {Icon} from "../Icon/Icon"

export interface SwitchProps {
  disabled?: boolean;
  size: "large" | "medium" | "small"
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  disabled,
  size = "large",
  label,
}) => {
  return (
    <div className={`toggles ${size}`}>
      <input type="checkbox" name="alerts" id="alerts"  className="visually-hidden" disabled={disabled} />
      <label htmlFor="alerts">{label}</label>
    </div>
  );
};
