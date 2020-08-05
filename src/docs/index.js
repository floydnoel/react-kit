import React from 'react';
import ReactDOM from 'react-dom';

import App from 'docs/app';
import { Router, Switch, Route } from 'components';
import * as serviceWorker from 'docs/service-worker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/src/components/presentation/markdown'>
          <div>Yeah!</div>
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
