import React from 'react'
import './app.css'
import { Markdown } from 'components'

import readme from './README.md'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Markdown markdownUrl={readme} section={`react-kit`} />
      </header>
      <p>
        [ <a href="https://floydnoel.github.io/react-kit/">docs</a>,{' '}
        <a href="https://github.com/floydnoel/react-kit">repo</a> ]
      </p>
      <div
        style={{
          textAlign: 'left',
          maxWidth: '800px',
          margin: '1em auto',
          padding: '1em',
        }}
      >
        <Markdown markdownUrl={readme} section={'about'} />
        <Markdown markdownUrl={readme} section={'components'} />
        <Markdown markdownUrl={readme} section={'code-conventions'} />
      </div>
    </div>
  )
}

export default App
