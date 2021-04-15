import React, { ReactNode } from "react";
// import styled from "@emotion/styled";

export interface RadioGroupProps {
    legend: string;
    children: ReactNode;
    error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    legend,
    children,
    error
}) => {
    return (
        <fieldset>
            <legend>{legend}</legend>
            {error && <span>{error}</span>}
            {children}
        </fieldset>
    );
};
