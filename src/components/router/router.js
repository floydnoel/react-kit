import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link as BrowserLink,
} from 'react-router-dom'

const Router = ({
  // TODO: get from homepage in package.json or somewhere
  basename = '/react-kit',
  children,
  ...rest
}) => <BrowserRouter {...{ basename, ...rest }}>{children}</BrowserRouter>

const Link = ({
  // copy `href` to `to` if necessary
  href,
  to,
  children,
  ...rest
}) => {
  console.log({ href, to, winner: to || href })
  return <BrowserLink {...{ to: to || href, ...rest }}>{children}</BrowserLink>
}

export { Router, Switch, Route, //MyLink as 
Link }
// https://reactrouter.com/web/guides/quick-start
// basename: process.env.PUBLIC_URL
// https://github.com/facebook/create-react-app/issues/1765
