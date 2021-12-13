import React from 'react';
import { ILinkProps } from './typings';
import './style.css';

function Link(props: ILinkProps) {
  const {
    className = '', children, text = '', url = '', target = '', ...rest
  } = props;

  return (
    <a
      className={`atom--link ${className}`}
      href={url}
      target={target}
      {...rest}
    >
      {children || text}
    </a>
  );
}

export default Link;
export { Link };
