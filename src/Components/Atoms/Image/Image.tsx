import React from 'react';
import { IImageProps } from './typings';
import './style.css';

function Image(props: IImageProps) {
  const {
    className = '', children, src = '', altText = '', ...rest
  } = props;

  return (
    <img
      className={`atom--image ${className}`}
      src={src}
      alt={altText}
      {...rest}
    />
  );
}

export default Image;
export { Image };
