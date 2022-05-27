import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link as BrowserLink,
} from 'react-router-dom'

// PUBLIC_URL is set by CRA based on the homepage listed in package.json
let { PUBLIC_URL } = process.env
let Router = ({ basename = PUBLIC_URL, children, ...rest }) => (
  <BrowserRouter {...{ basename, ...rest }}>{children}</BrowserRouter>
)

let Link = ({
  // copy `href` to `to` if necessary
  href,
  to,
  children,
  ...rest
}) => <BrowserLink {...{ to: to || href, ...rest }}>{children}</BrowserLink>

export {
  // https://reactrouter.com/web/guides/quick-start
  Router,
  Routes as Switch,
  Route,
  Link,
}

// https://reactrouter.com/web/guides/quick-start
// basename: process.env.PUBLIC_URL
// https://github.com/facebook/create-react-app/issues/1765
