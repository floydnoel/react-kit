# Markdown component

This component handles rendering `markdown` formatted documents.

Example:

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
