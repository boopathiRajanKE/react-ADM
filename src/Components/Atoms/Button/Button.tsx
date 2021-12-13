import React from 'react';
import { IButtonProps } from './typings';
import './style.css';

function Button(props: IButtonProps) {
  const {
    className = '', children, onClick = () => {}, text = '',
  } = props;

  return (
    <button type="button" className={`atom--button ${className}`} onClick={onClick}>{children || text}</button>
  );
}

export default Button;
export { Button };
