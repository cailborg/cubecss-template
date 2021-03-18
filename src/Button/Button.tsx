import React, { ReactNode } from "react";
import "./Button.scss";
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
      <button
        className={`button flex justify-center items-center min-w-xs rounded-sm transition-all cursor-pointer box-border font-button ${size}` }
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
