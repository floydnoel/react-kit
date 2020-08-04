# Markdown component

This component handles rendering `markdown` formatted text and files. It uses the `markdown-to-jsx` package ([repo](https://github.com/probablyup/markdown-to-jsx/) [demo](https://probablyup.com/markdown-to-jsx/)). The API is compatible with `markdown-to-jsx`, with some additions.

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
  return <Markdown markdownUrl="https://example.com/something.md" />;
};
```

TODO: how to include sample from a story?
