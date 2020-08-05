/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
// import logo from './logo.svg';
import './app.css';
import Markdown from 'components/presentation/markdown/markdown';
// import TextField from 'components/interaction/text-field/text-field';
// import json from './package.json';
import readme from './README.md';

// const Json = () => <div>{JSON.stringify(json)}</div>;

function App() {
  // const [markdownUrl, setMarkdownUrl] = useState(
  //   'https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md'
  // );
  return (
    <div className='App'>
      <header className='App-header'>
        <Markdown markdownUrl={`${readme}`} section={`react-kit`} />
      </header>
      {/* <Json>{json}</Json> */}
      <p>
        [ <a href='https://floydnoel.github.io/react-kit/'>docs</a>,{' '}
        <a href='https://github.com/floydnoel/react-kit'>repo</a> ]
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
      {/* <div>The first component: Markdown</div> */}
      {/* <div>
        <Markdown>##### This is markdown!</Markdown>
      </div> */}
      {/* <div>
        <Markdown markdownUrl={test} />
      </div> */}
      {/* <div
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
      </div> */}
    </div>
  );
}

export default App;
