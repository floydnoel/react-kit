# React Kit

`@floydnoel/react-kit`

<!-- My favorite packages and components together, forever! -->

## About

Projects like create-react-app, Next.js, and Gatsby have demonstrated the utility of creating a more integrated **developer experience** in the JavaScript ecosystem. Having used Meteor for several years, I enjoy the productivity that a batteries-included experience provides. For now, I'm firmly in the React world, and I find myself most often working with create-react-app. CRA is amazing, but compared to RoR or Angular, getting started takes a bit more work.

JavaScript is certainly blessed with a plethora of packages to choose from. One thing can often be missing is the **cohesiveness** that frameworks and component libraries provide. I've used quite a few of these and the experience can often be highly productive and at the same time often frustrating.

So I decided to make a component (and utility) library for myself. One designed from the ground up to work with create-react-app. Dedicated to making it as **easy and fast** as possible to build a great React app. Of course, I'll support other React frameworks whenever possible.

The project is now in its earliest stage, with just a few components available. I'll be adding more as I need them. By version 1.0, I'd like to have a nice usable system that gets me productive with a new app immediately.

## Goals

The goals of this project are ideals that I'd like to maintain wherever possible.

The most important goal is _easy and reliable compatibility with create-react-app_. Every user should be able to use this package with no extra steps beyond installing it into their create-react-app project. Ensuring this goal will require lots of tests!

The second most important goal is _great documentation_. Every prop and argument should be documented and demonstrated, just like any good component library. Examples should be provided, and they be reflected in the snapshot tests. The documentation itself is a create-react-app project using only components available in this package.

Other goals include offering built in support for VSCode-based tooling. Components and code should support VSCode debugging, [ESLint](eslint.org) linting, and [Prettier](prettier.io) formatting. Additionally, _rely on the fantastic open-source community_ of packages whereever possible. Writing the universe from scratch is not a goal of this project. I'd also like to make styling easy and flexible, while providing enough to make things look decent out of the box. Advanced features such as accessibility and internationalization should be supported. Mobile compatibility is also a priority.

## Status

Early work-in-progress, expect a lot of changes. Under development as a monorepo for now (docs and components in the same project).

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
- [Json](/src/components/json)
- [React Router](/src/components/router)

## Code conventions

- Like `npm` packages, all filenames are made up of lower case letters only (use a hyphen between words: `service-worker.js`).
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
- Experimental: prefer `let` over `const`
