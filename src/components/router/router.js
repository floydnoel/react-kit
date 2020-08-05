import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Router = ({ children, ...rest }) => (
  <BrowserRouter {...{ basename: process.env.PUBLIC_URL, ...rest }}>
    {children}
  </BrowserRouter>
);

export { Router, Switch, Route, Link };
