import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Router = ({
  children,
  ...rest
}) => /*#__PURE__*/React.createElement(BrowserRouter, {
  basename: process.env.PUBLIC_URL,
  ...rest
}, children);

export { Router, Switch, Route, Link }; // https://reactrouter.com/web/guides/quick-start