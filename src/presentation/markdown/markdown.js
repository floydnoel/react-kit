import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';

const Markdown = ({
  markdown,
  markdownUrl,
  loadingMessage = '### processing markdown...',
  children,
  ...rest
}) => {
  let [md, setMd] = useState(children || markdown || loadingMessage);
  useEffect(() => {
    const fetchMd = async (file) => {
      let response = await fetch(file);
      let body = await response.text();
      return body;
    };
    if (markdownUrl) {
      fetchMd(markdownUrl).then((markd) => setMd(markd));
    }
  }, [markdownUrl]);
  return <MarkdownToJsx {...rest}>{md}</MarkdownToJsx>;
};

Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  loadingMessage: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any,
};

export default Markdown;
