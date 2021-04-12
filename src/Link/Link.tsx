import React from "react";
import { Subtract } from "utility-types";
import styled from "@emotion/styled";
import { FocusRing } from "@react-aria/focus";

export interface LinkProps {
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
    children: string;
    trackingId?: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    inline?: boolean;
    size: "legal" | "small" | "medium";
}

const getSize = (size: string) => {
    switch (size) {
        case "legal":
            return `var(--lp-font-size-link-legal)`;
        case "small":
            return `var(--lp-font-size-link-sm)`;
        case "medium":
            return `var(--lp-font-size-link-md)`;
        default:
            return `var(--lp-font-size-link-sm)`;
    }
};

const getLineHeight = (size: string) => {
    switch (size) {
        case "legal":
            return `var(--lp-line-height-link-legal)`;
        case "small":
            return `var(--lp-line-height-link-sm)`;
        case "medium":
            return `var(--lp-line-height-link-md)`;
        default:
            return `var(--lp-line-height-link-sm)`;
    }
};

const getLetterSpacing = (size: string) => {
    switch (size) {
        case "legal":
            return `var(--lp-letter-spacing-link-legal)`;
        case "small":
            return `var(--lp-letter-spacing-link-sm)`;
        case "medium":
            return `var(--lp-letter-spacing-link-md)`;
        default:
            return `var(--lp-letter-spacing-link-sm)`;
    }
};

const StyledLink = styled.a<{ inline: boolean; size: string }>`
    color: ${(props) =>
        props.inline ? `currentColor` : `rgba(var(--lp-colors-primary), 1)`};
    font-family: ${(props) =>
        props.inline ? `inherit` : `var(--lp-fonts-body-1)`};
    font-weight: inherit;
    cursor: pointer;
    text-decoration-line: underline;
    font-size: ${(props) => (props.inline ? `inherit` : getSize(props.size))};
    line-height: ${(props) =>
        props.inline ? `inherit` : getLineHeight(props.size)};
    letter-spacing: ${(props) =>
        props.inline ? `inherit` : getLetterSpacing(props.size)};
    &:hover {
        text-decoration-line: none;
        color: ${(props) =>
            props.inline
                ? `currentColor`
                : `rgba(var(--lp-colors-primary), 0.8)`};
    }
    &:focus {
        outline: none;
    }
    &.focus-ring {
        border-radius: var(--lp-radii-sm);
        box-shadow: var(--lp-focus-ring);
    }
`;

export class Link extends React.Component<LinkProps> {
    static withRoutingComponent = <P extends {}>(
        RoutingComponent: React.ComponentType<P>
    ) => {
        const Link: React.FC<Subtract<P, {}>> = (props) => (
            <RoutingComponent {...(props as P)} />
        );

        return Link;
    };

    render() {
        
        const {
            href = "#",
            target,
            trackingId,
            children,
            onClick,
            inline = false,
            size,
            ...other
        } = this.props;

        const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            onClick && onClick(event);
        };

        return (
            <FocusRing focusRingClass="focus-ring">
                <StyledLink
                    inline={inline}
                    data-tracking-id={trackingId}
                    href={href}
                    target={target}
                    onClick={onClick ? onClickHandler : undefined}
                    rel="noopener noreferrer"
                    size={size}
                    {...other}
                >
                    {children}
                </StyledLink>
            </FocusRing>
        );
    }
}
