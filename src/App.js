import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Markdown from "./components/presentation/markdown/markdown";
import test from "./test.md";
import TextField from "components/interactive/text-field/text-field";

function App() {
  const [markdownUrl, setMarkdownUrl] = useState(
    "https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md"
  );
  return (
    <div className="App">
      <header className="App-header">
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
      <div
        style={{
          background: "rgb(246, 248, 250)",
          textAlign: "left",
          padding: "1em",
          maxWidth: "900px",
          margin: "32px auto",
        }}
      >
        <TextField onChange={({ target: { value } }) => setMarkdownUrl(value)}>
          {markdownUrl}
        </TextField>
        <Markdown markdownUrl={markdownUrl} />
      </div>
    </div>
  );
}

export default App;
