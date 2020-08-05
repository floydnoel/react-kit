import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { homepage } from 'docs/package.json';

const Router = ({ children, ...rest }) => (
  <BrowserRouter {...{ basename: homepage, ...rest }}>{children}</BrowserRouter>
);

export { Router, Switch, Route, Link };
// https://reactrouter.com/web/guides/quick-start
