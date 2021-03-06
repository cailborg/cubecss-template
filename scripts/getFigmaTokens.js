const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const fetch = require("node-fetch");

const nonFigmaDefinedStyleProperties = {
    borderStyles: {
        None: { value: "none" },
        Dotted: { value: "dotted" },
        Solid: { value: "solid" },
    },
    durations: {
        Instant: { value: "0s" },
        Immediate: { value: "0.15s" },
        Quick: { value: "0.25s" },
        Moderate: { value: "0.5s" },
        Slow: { value: "1s" },
    },
    zIndices: {
        0: { value: 0 },
        100: { value: 100 },
        200: { value: 200 },
        300: { value: 300 },
        400: { value: 400 },
        500: { value: 500 },
        auto: { value: "auto" },
        top: { value: 9999 },
        bottom: { value: -9999 },
    },
    focusRing: { value: "0 0 0 2px white, 0 0 0 6px dodgerblue" },
};

const checkNull = (variable) => {
    if (variable == null) {
        return 0;
    } else {
        return variable;
    }
};

const appendUnit = (value, unit) => (!value ? "0" : `${value}${unit}`);

const extractStyleProperties = (layer) => {
    switch (layer.name) {
        case "colors":
            return { 
                colors: Object.fromEntries(
                    layer.children.map((colorTone) => [
                        colorTone.name,

                        Object.fromEntries(
                            colorTone.children.map((color) => [
                                color.name,
                                {
                                    value: `${Math.round(
                                        color.fills[0].color.r * 255
                                      )}, ${Math.round(color.fills[0].color.g * 255)}, ${Math.round(
                                        color.fills[0].color.b * 255
                                      )}`
                                },                         
                            ]),                            
                        ),
                        
                    ]), 
                ),
                
            };

        case "space":
            return {
                space: Object.fromEntries(
                    layer.children.map((space) => [
                        [space.name],
                        { value: appendUnit(space.size.x, "px") },
                    ])
                ),
            };

        case "sizes":
            return {
                sizes: Object.fromEntries(
                    layer.children.map((sizes) => [
                        sizes.name,
                        {
                            value: appendUnit(
                                sizes.absoluteBoundingBox.width,
                                "px"
                            ),
                        },
                    ])
                ),
            };

        case "typography":
            return {
                fonts: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        {
                            value: `${type.style.fontFamily.replace(
                                /\s+/g,
                                ""
                            )}, san-serif`,
                        },
                    ])
                ),
                fontSize: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        { value: appendUnit(type.style.fontSize / 16, "rem") },
                    ])
                ),
                fontWeight: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        { value: type.style.fontWeight },
                    ])
                ),
                lineHeight: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        {
                            value: appendUnit(
                                type.style.lineHeightPx / 16,
                                "rem"
                            ),
                        },
                    ])
                ),
                letterSpacing: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        {
                            value: appendUnit(
                                Math.round((type.style.letterSpacing+ Number.EPSILON) * 100) / 100 / 16,
                                "rem"
                            ),
                        },
                    ])
                ),
                paragraphSpacing: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        { value: appendUnit(type.style.paragraphSpacing, "px") },
                    ])
                ),
                textTransform: Object.fromEntries(
                    layer.children.map((type) => [
                        [type.name],
                        { value: type.style.textCase ? `${type.style.textCase}case` : "none" },
                    ])
                ),
            };
        case "radii":
            return {
                radii: Object.fromEntries(
                    layer.children.map((radii) => [
                        [radii.name],
                        {
                            value: appendUnit(
                                checkNull(radii.cornerRadius),
                                "px"
                            ),
                        },
                    ])
                ),
            };
        case "borderWidths":
            return {
                borderWidths: Object.fromEntries(
                    layer.children.map((border) => [
                        [border.name],
                        { value: appendUnit(border.strokeWeight, "px") },
                    ])
                ),
            };
        case "shadows":
            return {
                shadows: Object.fromEntries(
                    layer.children.map((shadow) => [
                        shadow.name,
                        {
                            value: `${appendUnit(
                                shadow.effects[0].offset.x,
                                "px"
                            )} ${appendUnit(
                                shadow.effects[0].offset.y,
                                "px"
                            )} ${appendUnit(
                                shadow.effects[0].radius,
                                "px"
                            )} rgba(${shadow.effects[0].color.r}, ${
                                shadow.effects[0].color.g
                            }, ${
                                shadow.effects[0].color.b
                            }, ${shadow.effects[0].color.a.toFixed(2)})`,
                        },
                    ])
                ),
            };

        default:
            return {};
    }
};

(async () => {
    try {
        const response = await fetch(
            `https://api.figma.com/v1/files/${process.env.FIGMA_FILE_ID}?geometry=paths`,

            {
                headers: {
                    "X-Figma-Token": process.env.FIGMA_PAT,
                },
            }
        );

        const file = await response.json();
        
        const theme = file.document.children[1].children.reduce(
            (accumulator, layer) => ({
                ...accumulator,
                ...extractStyleProperties(layer),
            }),
            nonFigmaDefinedStyleProperties,
            
        );
        theme.colors.primary= { value: "{colors.amethyst.600.value}" }

        console.log(theme);

        fs.writeFileSync("src/tokens.json", JSON.stringify(theme));

        process.exit();
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
})();
