import React from 'react';
import { IHeadingProps } from './typings';
import './style.css';

function Heading(props: IHeadingProps) {
  const {
    className = '', children, text = '', tagName = 'h1', ...rest
  } = props;

  const TypeAsComponent = tagName || 'h1' as any;

  const headingClassNames = `atom--heading ${className}`;
  return (
    <TypeAsComponent className={headingClassNames} {...rest}>{text || children}</TypeAsComponent>
  );
}

export default Heading;
export { Heading };
