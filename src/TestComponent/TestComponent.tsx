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
        <div className="test bg-primary px-2 sm:px-5 m--1" data-variant={variant}>{children}</div>
        <div className="test text-grey-light text-2xl group-hover:bg-green leading-9" data-variant={variant}>{children}</div>
      </Flow>
    </Wrapper>
  );
};
