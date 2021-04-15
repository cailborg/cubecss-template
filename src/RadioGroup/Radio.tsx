import React from "react";
import styled from "@emotion/styled";
// import style from "./Radio.module.css";

export interface RadioProps {
    id: string;
    title: string;
    groupName: string;
    defaultChecked?: boolean;
    checked?: boolean;
    trackingId?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ref?: React.Ref<HTMLInputElement>;
}

// const StyledControl = styled.div``;

const StyledLabel = styled.label`
    float: none;
    width: 100%;
    margin-bottom: var(--lp-space-xs);
    &:last-of-type {
        margin-bottom: 0;
    }

    @media screen and (min-width: 360px) {
        & {
            float: left;
            margin-right: var(--lp-space-s);
            width: max-content;
        }
        &:last-of-type {
            margin-right: 0;
        }
    }

    @supports (-webkit-appearance: none) or (-moz-appearance: none) {
        & > input[type="radio"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            margin: 0;
        }
    }
    background: rgba(var(--lp-colors-neutral-100), 1);
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 12px var(--lp-space-s) 12px var(--space-l);
    border-radius: var(--lp-radii-s);
    border: var(--lp-border-widths-thick) var(--lp-border-styles-solid)
        rgba(var(--lp-colors-neutral-100), 1);
    font-family: var(--lp-fonts-caption);
    font-weight: var(--lp-font-weights-caption);
    font-size: var(--lp-font-sizes-caption);
    line-height: var(--lp-line-heights-caption);
    letter-spacing: var(--lp-letter-spacings-caption);
    color: rgba(var(--lp-colors-neutral-800), 1);
    transition: ease-in-out var(--lp-durations-immediate);

    & > input[type="radio"] + div::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: var(--lp-space-xs);
        top: var(--lp-space-xs);
        border-radius: 50%;
        border: var(--lp-border-widths-thin) var(--lp-border-styles-solid)
            rgba(var(--lp-colors-neutral-500), 1);
        width: 24px;
        height: 24px;
        box-sizing: unset;
    }
    & > input[type="radio"] + div::after {
        content: "";
    position: absolute;
    display: inline-block;
    left: 15px;
    top: 15px;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    box-sizing: unset;
    }
    & > input[type="radio"]:checked + div::after {
        background: rgba(var(--lp-colors-neutral-800), 1);
    }
    &:focus-within {
        border-color: rgba(var(--lp-colors-amethyst-600), 1);
    }
    
    &:hover {
        border-color: rgba(var(--lp-colors-neutral-800), 1);
    }
    
    & span {
        margin-left: var(--lp-space-xs);
    }
`;

export const Radio: React.FC<RadioProps> = React.forwardRef(function Radio(
    { id, title, groupName, defaultChecked, checked, trackingId, onChange },
    ref?: React.Ref<HTMLInputElement>
) {
    return (
        <StyledLabel htmlFor={id}>
            <input
                type="radio"
                name={groupName}
                value={title}
                id={id}
                defaultChecked={defaultChecked}
                checked={checked}
                data-tracking-id={trackingId}
                onChange={onChange}
                ref={ref}
            />
            <div></div>
            <span>{title}</span>
        </StyledLabel>
    );
});
