import React, { ReactNode } from "react";
import { Flow, Wrapper, VisuallyHidden, FlexContainer } from "../Utilities/Utilities";
import { Sizes } from "./types";
import "./TestComponent.scss"

export interface TestComponentProps {
  variant: "primary" | "secondary";
  children?: ReactNode;
  width?: Sizes;
}

export const TestComponent: React.FC<TestComponentProps> = ({variant="primary", children, width}) => {

  return (
    <Wrapper classNames={`max-w-${width}`}>
      <Flow classNames="group">
        <div className="test font-heading ring-4 ring-amethyst-600 ring-offset-4 ring-offset-neutral-white rounded-sm transition-transform transform hover:translate-x-1/2 bg-primary px-tiny sm:px-5 m--1" data-variant={variant}>{children}</div>
        <div className="test font-body shadow-high border-thick border-eminence-600 hover:border-sky-600 group-hover:bg-neutral-300 border-indigo-600 p-jumbo hover:text-indigo-600 text-heading-xl leading-heading-xl">{children}</div>
      </Flow>
        <FlexContainer classNames="flexContainer-override">
        <div className="bg-indigo-600 p-lg">im an item</div>
        <div className="bg-indigo-600 p-lg">im an item</div>
        <div className="bg-indigo-600 p-lg">im an item</div>
        <div className="bg-indigo-600 p-lg">im an item</div>
        </FlexContainer>
        <VisuallyHidden>you can't see me</VisuallyHidden>
    </Wrapper>
  );
};
