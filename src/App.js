import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Markdown from "./components/presentation/markdown/markdown";
import test from "./test.md";
import TextField from "components/interactive/text-field/text-field";
import json from "./package.json";
import readme from "./README.md";

const Json = () => <div>{JSON.stringify(json)}</div>;

function App() {
  const [markdownUrl, setMarkdownUrl] = useState(
    "https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md"
  );
  return (
    <div className="App">
      <header className="App-header">
        <p title="@floydnoel/react-kit">React Kit</p>
        <p style={{ fontSize: "0.5em" }}>@floydnoel/react-kit</p>
        {/* <p>{JSON.stringify(json)}</p> */}
        <Json>{json}</Json>
        {/* <p>{readme}</p> */}
        <Markdown markdownUrl={readme} />
      </header>
      <p>my favorite packages and components together, forever.</p>
      <p>
        [ <a href="https://floydnoel.github.io/react-kit/">docs</a>,{" "}
        <a href="https://github.com/floydnoel/react-kit">repo</a> ]
      </p>
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
        <TextField onChangeValue={setMarkdownUrl}>{markdownUrl}</TextField>
        <button
          onClick={() =>
            setMarkdownUrl(
              "https://raw.githubusercontent.com/probablyup/markdown-to-jsx/master/README.md"
            )
          }
        >
          reset
        </button>
        <Markdown markdownUrl={markdownUrl} />
      </div>
    </div>
  );
}

export default App;
