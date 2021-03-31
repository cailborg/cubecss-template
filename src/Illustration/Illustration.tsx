import React, { useState, useEffect } from "react";
// import styled from "@emotion/styled";

export interface IllustrationProps {
    title: string;
    // variant: "small" | "medium" | "large";
    name: string;
}

export const Illustration: React.FC<IllustrationProps> = ({
    name,
    title,
    // variant
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
                    m.default({ title })
                )
        );
    }, [name, title]);
    return SvgComponent ? <>{SvgComponent}</> : null;
};
