import React from "react";
import styled from "@emotion/styled";

export interface TestProps {
    variant?: "body-1" | "body-2" | "body-3" | "caption" | "overline";
    children: React.ReactNode;
    someNumber?: number;
}

const StyledWrapper = styled.div<TestProps>`
transition: padding ease 250ms;
padding-top: ${(props: TestProps) => props.someNumber}px;
`;

export const EmotionTest: React.FC<TestProps> = ({
    variant,
    children,
    someNumber
}) => {
    return (
        <StyledWrapper variant={variant} someNumber={someNumber}>
            {children}
        </StyledWrapper>
    );
};
