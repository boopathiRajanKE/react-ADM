import React from 'react';
import { Text, Link } from '../../Atoms';
import { IFastForwardProps } from './typings';
import './style.css';

function FastForward(props: IFastForwardProps) {
  const { icon = () => {}, url = '', text = '' } = props;
  return (
    <Link url={url} className="fastForward--link">
      {icon()}
      <Text tagName="span" text={text} />
    </Link>
  );
}

export default FastForward;
export { FastForward };
