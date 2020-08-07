import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';
import { getSectionContent } from './markdown-utils';
import { Link } from 'components';

// const noMarkdownErrorMessage = 'No markdown or markdown source received.';

const Markdown = ({
  markdown,
  markdownUrl,
  link = Link,
  section,
  children = markdown,
  initializingMessage = 'Initializing markdown.',
  fetchingMessage = 'Fetching markdown.',
  noMarkdownErrorMessage = 'No markdown or markdown source received.',
  ...rest
}) => {
  const [content, setContent] = useState(children || initializingMessage);
  useEffect(() => {
    const fetchText = async ({ url }) => {
      const response = await fetch(url);
      const body = await response.text();
      return body;
    };
    if (markdownUrl) {
      setContent(fetchingMessage || initializingMessage);
      fetchText({ url: markdownUrl }).then((content) =>
        setContent(section ? getSectionContent({ content, section }) : content)
      );
    }
  }, [fetchingMessage, initializingMessage, markdownUrl, section]);
  // option to throw instead?
  if (!children && !markdownUrl) return noMarkdownErrorMessage;
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
  );
};

Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  children: PropTypes.string,
  rest: PropTypes.any,
  link: PropTypes.element,
};

// Markdown.defaultProps = {
//   children: '##### processing markdown...',
// };

export default Markdown;
