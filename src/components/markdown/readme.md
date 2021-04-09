# Markdown component

This component handles rendering `markdown` formatted text and files. It uses the `markdown-to-jsx` package ([repo](https://github.com/probablyup/markdown-to-jsx/), [demo](https://probablyup.com/markdown-to-jsx/)). The API is compatible with `markdown-to-jsx`, with some additions. The biggest is that this component can fetch mardown files from a given URL, passed in the `markdownUrl` prop as a string. Also, your markdown can be passed as a string either via the `markdown` prop or as the child of `Markdown` tags.

Examples:

```js
import React from 'react'
import { Markdown } from '@floydnoel/react-kit'

let SomeMarkdown = () => {
  return <Markdown># Some markdown</Markdown>
}

let FetchedMarkdown = () => {
  return (
    <Markdown markdownUrl="https://raw.githubusercontent.com/floydnoel/exceldate/1.1.0/README.md" />
  )
}
```

TODO: include samples from a stories
