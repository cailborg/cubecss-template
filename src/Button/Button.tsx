import React, { ReactNode } from "react";
import "./Button.scss";
import { FocusRing } from "@react-aria/focus";

export interface ButtonProps {
  trackingId?: string;
  variant: "primary" | "secondary" | "strong" | "default" | "weak";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  trackingId,
  variant,
  type,
  disabled,
  onClick,
  ariaLabel,
  children,
}) => {
  return (
    <FocusRing focusRingClass="focus-ring">
      <button
        className={`button font-heading font-bold rounded-sm`}
        data-variant={variant}
        disabled={disabled}
        type={type}
        onClick={onClick}
        data-tracking-id={trackingId}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </FocusRing>
  );
};
