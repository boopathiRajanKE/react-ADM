import * as React from 'react';
import { Text } from './Text';
import { ITextProps } from './typings';

export default {
  title: 'Atoms/Text',
  component: Text,
};

const Template : any = (args: ITextProps) => <Text {...args} />;

export const Link1 = Template.bind({});
Link1.args = {
  text: 'Copyright © 2020 Discovery Digital Ventures, LLC',
};
