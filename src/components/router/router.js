import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link as BrowserLink,
} from 'react-router-dom'

const { PUBLIC_URL } = process.env
const Router = ({ basename = PUBLIC_URL, children, ...rest }) => (
  <BrowserRouter {...{ basename, ...rest }}>{children}</BrowserRouter>
)

const Link = ({
  // copy `href` to `to` if necessary
  href,
  to,
  children,
  ...rest
}) => <BrowserLink {...{ to: to || href, ...rest }}>{children}</BrowserLink>

export {
  Router,
  Switch,
  Route, //MyLink as
  Link,
}
// https://reactrouter.com/web/guides/quick-start
// basename: process.env.PUBLIC_URL
// https://github.com/facebook/create-react-app/issues/1765
