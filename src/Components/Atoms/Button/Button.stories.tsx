import * as React from 'react';
import { Button } from './Button';
import { IButtonProps } from './typings';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template : any = (args: IButtonProps) => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
  text: 'Watch Now',
};
