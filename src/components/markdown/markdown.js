import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import MarkdownToJsx from 'markdown-to-jsx'
import { Link } from 'components'

import { getSectionContent } from './markdown-utils'

// ***TODOS***
// - better code blocks & styling
// - handle external links
// - option to throw instead?
// - log possible errors?

let Markdown = ({
  markdown,
  markdownUrl,
  link,
  section,
  children = markdown,
  verbose,
  initializingMessage,
  fetchingMessage,
  noMarkdownMessage,
  ...rest
}) => {
  let [content, setContent] = useState(children || initializingMessage)
  useEffect(() => {
    let fetchText = async ({ url }) => {
      let response = await fetch(url)
      let body = await response.text()
      return body
    }
    if (markdownUrl) {
      if (fetchingMessage) setContent(fetchingMessage)
      fetchText({ url: markdownUrl }).then((content) => {
        if (section) {
          let con = getSectionContent({ content, section })
          setContent(con ? con : noMarkdownMessage)
        } else if (content.indexOf('<!DOCTYPE html>') === 0) {
          setContent(noMarkdownMessage)
        } else {
          setContent(content)
        }
      })
    }
  }, [fetchingMessage, noMarkdownMessage, markdownUrl, section])

  if (!children && !markdownUrl) return noMarkdownMessage
  return (
    <MarkdownToJsx
      {...{
        options: {
          overrides: {
            a: {
              component: link,
              // props: {
              //   className: 'foo',
              // },
            },
          },
        },
        // style: {
        //   animation: 'slidein 3s',
        // },
        ...rest,
      }}
    >
      {content}
    </MarkdownToJsx>
  )
}

Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  link: PropTypes.element,
  section: PropTypes.string,
  children: PropTypes.string,
  verbose: PropTypes.bool,
  initializingMessage: PropTypes.string,
  fetchingMessage: PropTypes.string,
  noMarkdownMessage: PropTypes.string,
  rest: PropTypes.any,
}

Markdown.defaultProps = {
  verbose: true,
  link: Link,
  initializingMessage: '',
  fetchingMessage: '',
  noMarkdownMessage: '',
}

export default Markdown
