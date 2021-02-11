import React, { ReactNode } from "react";
import { Flow, Wrapper } from "../Utilities/Utilities";
import "./TestComponent.scss"

export interface TestComponentProps {
  variant: "primary" | "secondary";
  children?: ReactNode;
}

export const TestComponent: React.FC<TestComponentProps> = ({variant="primary", children}) => {

  return (
    <Wrapper>
      <Flow classNames="group">
        <div className="ring-4 ring-amethyst-600 ring-offset-4 ring-offset-neutral-white rounded-sm transition-transform transform hover:translate-x-xl test placeholder-persimmon-100::-webkit-input-placeholder bg-primary px-tiny sm:px-5 m--1" data-variant={variant}>{children}</div>
        <div className=" test shadow-high border-thick border-eminence-600 hover:border-sky-600 border-indigo-600 p-jumbo hover:text-indigo-600 text-heading-xl group-hover:bg-green leading-heading-xl">{children}</div>
      </Flow>
    </Wrapper>
  );
};
