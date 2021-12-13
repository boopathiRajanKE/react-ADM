import React from 'react';
import { ITextProps } from './typings';
import './style.css';

function Text(props: ITextProps) {
  const {
    className = '', children, text = '', tagName = '', ...rest
  } = props;

  const TypeAsComponent = (tagName === '' ? 'div' : tagName) as any;

  return (
    <TypeAsComponent className={`atom--text ${className}`} {...rest}>
      {children || text}
    </TypeAsComponent>
  );
}

export default Text;
export { Text };
