import * as React from 'react';
import { browseIcon, liveIcon, searchIcon } from '../../../Assets';
import { FastForward } from './FastForward';
import { IFastForwardProps } from './typings';

export default {
  title: 'Molecules/FastForward',
  component: FastForward,
};

const Template : any = (args : IFastForwardProps) => <FastForward {...args} />;

export const browseSection = Template.bind({});
browseSection.args = {
  icon: browseIcon,
  url: '/show',
  text: 'Shows',
};

export const liveSection = Template.bind({});
liveSection.args = {
  icon: liveIcon,
  url: '/live',
  text: 'On Now',
};

export const searchSection = Template.bind({});
searchSection.args = {
  icon: searchIcon,
  url: '/search',
  text: 'Search',
};
