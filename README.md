# React Kit

`@floydnoel/react-kit`

<!-- Useful React Components -->

## About

These are some React components that I have needed in projects, they could be useful to others. Enjoy!

## Getting started

### set up an app and add the package

```sh
npx create-react-app [your-app-name]
cd [your-app-name]
yarn add @floydnoel/react-kit
```

### import and use

```jsx
import { Markdown } from '@floydnoel/react-kit'

let title = () => <Markdown># hello, world</Markdown>
```

## Components

- [Markdown](/src/components/markdown)
- [TextField](/src/components/text-field)
- [React Router](/src/components/router)
- [Error Boundary](/src/components/error-boundary)

## Code conventions

- Currently, all filenames are lower case words with hyphen separations.
- Directory structure
  - `react-kit`: root dir, contains configuration and miscellaneous files
    - `.github`: github specific files, such as action workflows
    - `build`: created by `yarn build:docs`, holds the docs static deploy files
    - `dist`: created by `yarn build:components`, contains the npm package built files
    - `node_modules`: installed packages for dev
    - `public`: same as CRA public folder
    - `scripts`: build and run scripts
    - `src`: source code files
      - `components`: source code for components published in the npm package
      - `docs`: docs source code
- Using prettier ([customized](/.prettierrc.json)) and eslint, run `yarn format` to run prettier
