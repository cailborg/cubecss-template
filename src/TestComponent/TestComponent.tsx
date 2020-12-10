import React, { ReactNode } from "react";
import { Flow, Wrapper, VisuallyHidden, Splitter} from "../Utilities/Utilities";
import "./TestComponent.scss"

export interface TestComponentProps {
  variant: "primary" | "secondary";
  children?: ReactNode;
}

export const TestComponent: React.FC<TestComponentProps> = ({variant="primary", children}) => {

  return (
    <Wrapper>
      <Flow>
        <div className="button bg-secondary" data-variant={variant}>{children}</div>
      </Flow>
    </Wrapper>
  );
};
