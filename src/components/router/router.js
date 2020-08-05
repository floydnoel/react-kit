import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Router = ({ children, ...rest }) => (
  <BrowserRouter {...{ basename: '/react-kit', ...rest }}>
    {children}
  </BrowserRouter>
);

export { Router, Switch, Route, Link };
// https://reactrouter.com/web/guides/quick-start
// basename: process.env.PUBLIC_URL
// https://github.com/facebook/create-react-app/issues/1765
