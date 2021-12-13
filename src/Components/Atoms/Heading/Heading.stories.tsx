import * as React from 'react';
import { Heading } from './Heading';
import { IHeadingProps } from './typings';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

const Template : any = (args: IHeadingProps) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  tagName: 'h3', text: 'SEASON PREMIERE',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  tagName: 'h4', text: 'Continue Watching',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  tagName: 'h4', text: 'Recommended For You',
};
