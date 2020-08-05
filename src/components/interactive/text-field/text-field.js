import React from "react";

const TextField = ({ children, style, ...rest }) => (
  <input
    type="text"
    value={children}
    style={{ width: "100%", ...style }}
    {...rest}
  />
);

export default TextField;
