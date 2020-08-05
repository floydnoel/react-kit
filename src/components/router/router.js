import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link as BrowserLink,
} from 'react-router-dom';

const Router = ({ children, ...rest }) => (
  <BrowserRouter {...{ basename: '/react-kit', ...rest }}>
    {children}
  </BrowserRouter>
);

const Link = ({ href, children, ...rest }) => (
  <BrowserLink to={href} {...rest}>
    {children}
  </BrowserLink>
);

export { Router, Switch, Route, Link };
// https://reactrouter.com/web/guides/quick-start
// basename: process.env.PUBLIC_URL
// https://github.com/facebook/create-react-app/issues/1765
