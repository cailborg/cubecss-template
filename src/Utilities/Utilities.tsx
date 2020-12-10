import React, { AllHTMLAttributes, ElementType } from "react";

export interface UtilityProps
  extends Omit<AllHTMLAttributes<HTMLElement>, "className"> {
  component?: ElementType;
  classNames?: string;
}

export const Flow = ({
  classNames,
  component: Component = "div",
  ...rest
}: UtilityProps) => <Component className={`flow ${classNames ? classNames : ""}`} {...rest} />;

export const Wrapper = ({
  classNames,
  component: Component = "div",
  ...rest
}: UtilityProps) => <Component className={`wrapper ${classNames ? classNames : ""}`} {...rest} />;

export const Splitter = ({
  classNames,
  component: Component = "div",
  ...rest
}: UtilityProps) => <Component className={`splitter ${classNames ? classNames : ""}`} {...rest} />;

export const VisuallyHidden = ({
  classNames,
  component: Component = "div",
  ...rest
}: UtilityProps) => <Component className={`visually-hidden ${classNames ? classNames : ""}`} {...rest} />;
