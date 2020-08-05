import React from 'react';

const TextField = ({
  value,
  onChange,
  onChangeValue,
  children,
  style,
  ...rest
}) => {
  return (
    <input
      {...{
        type: 'text',
        value: value || children,
        style: { width: '100%', ...style },
        onChange: (e) => {
          if (onChange) onChange(e);
          if (onChangeValue) onChangeValue(e.target.value);
        },
        ...rest,
      }}
      // type="text"
      // value={value || children}
      // style={{ width: "100%", ...style }}
      // onChange={(e) => {
      //   if (onChange) onChange(e);
      //   if (onChangeValue) onChangeValue(e.target.value);
      // }}
      // {...rest}
    />
  );
};

export default TextField;
