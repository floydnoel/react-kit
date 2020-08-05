import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Router = ({ children, ...rest }) => (
  <BrowserRouter {...{ basename: '/react-kit', ...rest }}>
    {children}
  </BrowserRouter>
);

const ReactKitLink = ({ href, children, ...rest }) => (
  <Link to={href} {...rest}>
    {children}
  </Link>
);

export { Router, Switch, Route, ReactKitLink as Link };
// https://reactrouter.com/web/guides/quick-start
// basename: process.env.PUBLIC_URL
// https://github.com/facebook/create-react-app/issues/1765
