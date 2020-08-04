# Markdown component

This component handles rendering `markdown` formatted text and files. It uses the `markdown-to-jsx` package ([repo](https://github.com/probablyup/markdown-to-jsx/) [demo](https://probablyup.com/markdown-to-jsx/)). The API is compatible with `markdown-to-jsx`, with some additions. The biggest is that this component can fetch mardown files from a given URL, passed in the `markdownUrl` prop as a string. This component has a loading message to accomodate network delays in fetching remote sources, which you can set (in markdown format, a plain string works as well) via the `loadingMessage` prop. Your markdown can be passed via the `markdown` prop or as the child of `Markdown` tags.

Props:

```js
Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  loadingMessage: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any,
};
```

Examples:

```js
import React from "react";
import { Markdown } from "@floydnoel/react-kit";

const SomeMarkdown = () => {
  return <Markdown># Some markdown</Markdown>;
};

const FetchedMarkdown = () => {
  return (
    <Markdown markdownUrl="https://raw.githubusercontent.com/floydnoel/exceldate/1.1.0/README.md" />
  );
};
```

TODO: include samples from a stories
