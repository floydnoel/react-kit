import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';
import { getSectionContent } from './markdown-utils';

const Markdown = ({
  markdown,
  markdownUrl,
  section,
  children,
  ...rest
}) => {
  const [content, setContent] = useState(children || section || markdown);
  useEffect(() => {
    const fetchText = async ({
      url
    }) => {
      const response = await fetch(url);
      const body = await response.text();
      return body;
    };

    if (markdownUrl) {
      fetchText({
        url: markdownUrl
      }).then(content => setContent(section ? getSectionContent({
        content,
        section
      }) : content));
    }
  }, [markdownUrl, section]);
  return /*#__PURE__*/React.createElement(MarkdownToJsx, rest, content);
};

Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any
};
Markdown.defaultProps = {
  children: '##### processing markdown...'
};
export default Markdown;