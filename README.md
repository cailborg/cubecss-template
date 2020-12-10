# A CubeCSS Design System

Usses React, Typescript, SASS & Storybook

## Styling methodology

### Hierarchy

> CSS Reset

> Global styles

> Composition classes (wrapper component)

> Utility classes (based on Design Tokens)

> Block level styles (local to each component)

> Exceptions (using `data` attributes)

> Inline styles for whitelabeling (using `css-in-jsx`)

## Scripts available

> `yarn storybook` Spin up the local Storybook project

> `yarn test` Run Jest test suites

> `yarn rollup` Build dist folder

## Publishing to Github Package Registry

Set up your `.npmrc` file with the following:

```
//npm.pkg.github.com/:_authToken=GITHUBTOKEN
@ORGNAME:registry=https://npm.pkg.github.com

```

Update the `package.json` version and run `npm publish` to publish a new package to Github
