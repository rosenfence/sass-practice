import React from 'react';
import classNames from 'classnames';
import './Box.scss';

const Box = ({ children }) => {
  return <div className={classNames('Box')}>{children}</div>;
};

export default Box;
