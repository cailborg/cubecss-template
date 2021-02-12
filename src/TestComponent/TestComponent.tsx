import React, { ReactNode } from "react";
import { Flow, Wrapper, Container, VisuallyHidden } from "../Utilities/Utilities";
import "./TestComponent.scss"

export interface TestComponentProps {
  variant: "primary" | "secondary";
  children?: ReactNode;
}

export const TestComponent: React.FC<TestComponentProps> = ({variant="primary", children}) => {

  return (
    <Wrapper>
      <Flow classNames="group">
        <div className="font-heading ring-4 ring-amethyst-600 ring-offset-4 ring-offset-neutral-white rounded-sm transition-transform transform hover:translate-x-1/2 test placeholder-persimmon-100::-webkit-input-placeholder bg-primary px-tiny sm:px-5 m--1" data-variant={variant}>{children}</div>
        <div className="font-body test shadow-high border-thick border-eminence-600 hover:border-sky-600 border-indigo-600 p-jumbo hover:text-indigo-600 text-heading-xl group-hover:bg-green leading-heading-xl">{children}</div>
      </Flow>
      <Container classNames="container-test">
        <div className="bg-indigo-600 p-lg">im an item</div>
        <div className="bg-indigo-600 p-lg">im an item</div>
        <div className="bg-indigo-600 p-lg">im an item</div>
        <div className="bg-indigo-600 p-lg">im an item</div>
        </Container>
        <VisuallyHidden>you can't see me</VisuallyHidden>
    </Wrapper>
  );
};
