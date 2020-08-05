import React, { useState } from 'react';
import {
  // Router,
  // Switch,
  // Route,
  Markdown,
  TextField,
} from 'components';

const MarkdownDemo = () => {
  const [markdownUrl, setMarkdownUrl] = useState('');
  return (
    <div
      style={{
        background: 'rgb(246, 248, 250)',
        textAlign: 'left',
        padding: '1em',
        maxWidth: '900px',
        margin: '32px auto',
      }}
    >
      <TextField onChangeValue={setMarkdownUrl}>{markdownUrl}</TextField>
      <button
        onClick={() =>
          setMarkdownUrl(
            'https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md'
          )
        }
      >
        reset
      </button>
      <Markdown markdownUrl={markdownUrl} />
    </div>
  );
};

export default MarkdownDemo;
