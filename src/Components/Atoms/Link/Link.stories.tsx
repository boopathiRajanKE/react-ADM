import * as React from 'react';
import { Link } from './Link';
import { ILinkProps } from './typings';

export default {
  title: 'Atoms/Link',
  component: Link,
};

const Template : any = (args: ILinkProps) => <Link {...args} />;

export const Link1 = Template.bind({});
Link1.args = {
  url: '/home', text: 'PolicyTerms', target: '_blank',
};

export const Link2 = Template.bind({});
Link2.args = {
  url: '/faq', text: 'Help/FAQPrivacy', target: '_blank',
};
