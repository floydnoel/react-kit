# React Kit

`@floydnoel/react-kit`

## About

My favorite packages and components together, forever!

## Status

Work-in-progress, expect a lot of changes.

## Getting started

### set up an app and add the package

```sh
npx create-react-app [your-app-name]
cd [your-app-name]
yarn add @floydnoel/react-kit
```

### import and use

```js
import { Markdown } from '@floydnoel/react-kit';

// ...

// in a component
<Markdown># hello, world</Markdown>;
```

## Components

- Markdown [ [repo](/floydnoel/react-kit/tree/babel/src/components/presentation/markdown), [docs](/floydnoel/react-kit/tree/babel/src/components/presentation/markdown) ]
- TextField [ [repo](https://github.com/floydnoel/react-kit/tree/babel/src/components/interaction/text-field), [docs](https://floydnoel.github.io/react-kit/text-field) ]
- Json [ [repo](https://github.com/floydnoel/react-kit), [docs](https://floydnoel.github.io/react-kit/) ]

## Core Ideals

- React-first components, built just for React. This will include React-likes (like Preact) in the future.
- Dogfood all components via the documentation app, built with `create-react-app`
- Built in VSCode support for tooling
  - Debugging support (TODO: test/setup)
  - [Prettier](prettier.io)
  - [ESLint](eslint.org)
- Support docs written in markdown, living with the code

## Code conventions

- All filenames are made up of lower case letters only (use a hyphen between words: `service-worker.js`), like npm packages.
- Components are split into the following types:
  - presentation/presentational
  - interaction/interactive
  - these will change (TODO: make pros/cons list)
- Directories
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
- Using prettier and eslint with custom rules, `yarn format` to run prettier
