import React from 'react';
import { Link, ILinkProps } from '../../Atoms';
import { ILinkListProps } from './typings';
import './style.css';

function LinkList(props: ILinkListProps) {
  const { data = [], className = '' } = props;

  const renderListItem = (itemProps: ILinkProps, index: number) => {
    const { text = '', url = '', target = '' } = itemProps;
    return <Link target={target} key={`list-item-${index}`} className="linkList--item" text={text} url={url} />;
  };
  return (
    <div className={`molecule--linkList ${className}`}>
      {data && data.length > 0 && data.map(renderListItem)}
    </div>
  );
}

export default LinkList;
export { LinkList };
