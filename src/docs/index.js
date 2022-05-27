import React from 'react'
import { createRoot } from 'react-dom/client'

import App from 'docs/app'
import { Router, Switch, Route, ErrorBoundary } from 'components'

// import * as serviceWorker from 'docs/service-worker'
import MarkdownStory from 'components/markdown/markdown.story'

let container = document.getElementById('root')
let root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route
            exact
            path="/src/components/markdown"
            element={<MarkdownStory />}
          />
          <Route path="/" element={<App />} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
