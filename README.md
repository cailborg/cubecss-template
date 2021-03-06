# A CubeCSS Design System

Uses React, Typescript, SASS & Storybook

## Styling methodology

### Hierarchy

> CSS Reset

> Global styles

> `C`omposition classes (wrapper component)

> `U`tility classes (based on Design Tokens)

> `B`lock level styles (local to each component)

> `E`xceptions (using `data` attributes)

> Inline styles for whitelabeling (using `css-in-jsx`)

## Scripts available

> `yarn storybook` Spin up the local Storybook project

> `yarn test` Run Jest test suites

> `yarn rollup` Build dist folder

> `yarn figma:tokens` Build `tokens.json` from the linked Figma file

> `yarn figma:icons` Build `iconsConfig.json` inside the `<Icon>` component, from the linked Figma file

## `.env` setup

Create a `.env` file and add the following:

```

FIGMA_FILE_ID=YOUR_FIGMA_FILE_ID_HERE
FIGMA_PAT=YOUR_FIGMA_PERSONAL_ACCESS_TOKEN_HERE

```

Your Figma file ID will be the string of letters/numbers immediately following the `www.figma.com/file/` in the file URL.
You can create an access token by following [these instructions](https://www.figma.com/developers/api#access-tokens)

## Transforming design tokens

> `yarn tokens` Run style dictionary

Make sure you have the [Style Dictionary CLI](https://amzn.github.io/style-dictionary/#/quick_start?id=installation) installed on your machine.

## Publishing to Github Package Registry

Set up your `.npmrc` file with the following:

```
//npm.pkg.github.com/:_authToken=GITHUBTOKEN
@ORGNAME:registry=https://npm.pkg.github.com

```

Update the `package.json` version and run `npm publish` to publish a new package to Github
