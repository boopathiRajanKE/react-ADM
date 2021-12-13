import React from 'react';
import { Text, Link } from '../../Atoms';
import './style.css';

function LogoSection() {
  return (
    <Link url="/">
      <div className="molecule-logo">
        <Text tagName="span" text="T" />
        <Text tagName="span" text="L" />
        <Text tagName="span" text="C" />
      </div>
    </Link>

  );
}

export default LogoSection;
export { LogoSection };
