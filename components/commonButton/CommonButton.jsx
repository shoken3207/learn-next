import React from 'react';
import Button from '@mui/material/Button';
const CommonButton = (props) => {
  const { children } = props;
  console.log(props);
  console.log(children);
  return <Button {...props}>{children}</Button>;
};

export default CommonButton;
