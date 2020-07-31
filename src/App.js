import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Markdown from './presentation/markdown/markdown';
import test from './test.md';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>React-Kit Documentation</p>
      </header>
      <p>my favorite packages and components together, forever.</p>
      <div>The first component: Markdown</div>
      <div>
        <Markdown>##### This is markdown!</Markdown>
      </div>
      <div>
        <Markdown markdownUrl={test} />
      </div>
    </div>
  );
}

export default App;
