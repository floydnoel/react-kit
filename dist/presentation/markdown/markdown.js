import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MarkdownToJsx from "markdown-to-jsx";

const Markdown = ({
  markdown,
  markdownUrl,
  loadingMessage,
  children,
  ...rest
}) => {
  const [content, setContent] = useState(children || markdown || loadingMessage);
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
      }).then(setContent);
    }
  }, [markdownUrl]);
  return /*#__PURE__*/React.createElement(MarkdownToJsx, rest, content);
};

Markdown.propTypes = {
  markdown: PropTypes.string,
  markdownUrl: PropTypes.string,
  loadingMessage: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any
};
Markdown.defaultProps = {
  loadingMessage: "##### processing markdown..."
};
export default Markdown;