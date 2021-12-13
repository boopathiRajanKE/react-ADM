import * as React from 'react';
import { footerMenuData, socialLinkData } from '../../../Assets';
import { LinkList } from './LinkList';
import { ILinkListProps } from './typings';

export default {
  title: 'Molecules/LinkList',
  component: LinkList,
};

const Template : any = (args : ILinkListProps) => <LinkList {...args} />;

export const footerMenu = Template.bind({});
footerMenu.args = {
  className: 'molecule--footerMenu',
  data: footerMenuData,
};

export const socialLinks = Template.bind({});
socialLinks.args = {
  className: 'molecule--socialLinks',
  data: socialLinkData,
};
