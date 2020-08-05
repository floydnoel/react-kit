import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MarkdownToJsx from "markdown-to-jsx";

const Markdown = ({ markdown, markdownUrl, children, ...rest }) => {
  const [content, setContent] = useState(children || markdown);
  useEffect(() => {
    const fetchText = async ({ url }) => {
      const response = await fetch(url);
      const body = await response.text();
      return body;
    };
    if (markdownUrl) {
      fetchText({ url: markdownUrl }).then(setContent);
    }
  }, [markdownUrl]);
  return <MarkdownToJsx {...rest}>{content}</MarkdownToJsx>;
};

Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any,
};

Markdown.defaultProps = {
  children: "##### processing markdown...",
};

export default Markdown;
