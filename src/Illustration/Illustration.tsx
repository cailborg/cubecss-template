import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

export interface IllustrationProps {
    title: string;
    name: string;
    size: "small" | "medium" | "large";
}

const getSize = (size: string) => {
    switch (size) {
        case "small":
            return `64px`;
        case "medium":
            return `96px`;
        case "large":
            return `192px`;
        default:
            return `192px`;
    }
};

const Wrapper = styled.div<{ size: string }>`
    & > svg {
        width: ${(props) => getSize(props.size)};
        height:auto;
    }
`;
export const Illustration: React.FC<IllustrationProps> = ({
    name,
    title,
    size
}) => {
    const [SvgComponent, setSvgComponent] = useState<
        undefined | React.ElementType
    >();
    useEffect(() => {
        import(
            `!@svgr/webpack?+titleProp!../_assets/Illustrations/svg/${name}.svg`
        ).then(
            m =>
                setSvgComponent(
                    m.default({ title , viewBox: "0 0 192 192"})
                )
        );
    }, [name, title]);
    return SvgComponent ? <Wrapper size={size}>{SvgComponent}</Wrapper> : null;
};
