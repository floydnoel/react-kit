import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';
import { getSectionContent } from './markdown-utils';
import { Link } from 'components';

const Markdown = ({
  markdown,
  markdownUrl,
  link = Link,
  section,
  children,
  ...rest
}) => {
  const [content, setContent] = useState(children || section || markdown);
  useEffect(() => {
    const fetchText = async ({ url }) => {
      const response = await fetch(url);
      const body = await response.text();
      return body;
    };
    if (markdownUrl) {
      fetchText({ url: markdownUrl }).then((content) =>
        setContent(section ? getSectionContent({ content, section }) : content)
      );
    }
  }, [markdownUrl, section]);
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
  children: PropTypes.node,
  rest: PropTypes.any,
  link: PropTypes.element,
};

Markdown.defaultProps = {
  children: '##### processing markdown...',
};

export default Markdown;
