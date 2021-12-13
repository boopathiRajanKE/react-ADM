import React from 'react';
import { IIconProps } from './typings';
import './style.css';

function Icon(props: IIconProps) {
  const {
    viewBox = '0 0 24 24',
    width = '10px',
    height = '10px',
    className = '',
    fill = '',
    children,
    ...rest
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox={viewBox}
      width={width}
      height={height}
      className={`atom--icon ${className}`}
      {...rest}
    >
      {children}
    </svg>
  );
}

export default Icon;
export { Icon };
