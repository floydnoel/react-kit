import React, { useState } from 'react'
import {
  // Router,
  // Switch,
  // Route,
  Markdown,
  TextField,
} from 'components'
import readme from './readme.md'
// import { Link } from 'react-router-dom'

let MarkdownStory = () => {
  let [markdownUrl, setMarkdownUrl] = useState('')
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Markdown markdownUrl={readme} />
      <div
        style={{
          background: 'rgb(246, 248, 250)',
          textAlign: 'left',
          padding: '1em',
          maxWidth: '900px',
          margin: '32px auto',
        }}
      >
        <h2>Demo: Load any markdown from a URL here</h2>
        <div>
          Try{' '}
          <code>
            https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md
          </code>
        </div>
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
        <Markdown
          noMarkdownMessage='Specify a markdown URL to begin'
          markdownUrl={markdownUrl}
        />
      </div>
    </div>
  )
}

export default MarkdownStory
