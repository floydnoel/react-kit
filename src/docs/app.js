/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react'
// import logo from './logo.svg';
import './app.css'
import { Markdown } from 'components'
// import TextField from 'components/interaction/text-field/text-field';
// import json from './package.json';
import readme from './README.md'

// let Json = () => <div>{JSON.stringify(json)}</div>;

function App() {
  // console.log({ publicUrl: process.env.PUBLIC_URL })
  return (
    <div className="App">
      <header className="App-header">
        <Markdown markdownUrl={readme} section={`react-kit`} />
      </header>
      {/* <Json>{json}</Json> */}
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
