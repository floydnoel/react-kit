import React from 'react';
import ReactDOM from 'react-dom';

import App from 'docs/app';
import { Router, Switch, Route } from 'components';

import * as serviceWorker from 'docs/service-worker';
import MarkdownStory from 'components/markdown/markdown.story';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/src/components/markdown'>
          <MarkdownStory />
        </Route>
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
