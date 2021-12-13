import * as React from 'react';
import {
  continueWatching, recommendedForYou, playLists, addedTLC, onNow,
} from '../../../Assets/Data';
import { ImageList } from './ImageList';
import { IImageListProps } from './typings';

export default {
  title: 'Molecules/ImageList',
  component: ImageList,
};

const Template : any = (args: IImageListProps) => <ImageList {...args} />;

export const ImageList1 = Template.bind({});
ImageList1.args = {
  data: continueWatching, className: 'imageList--continueWatch landscape',
};

export const ImageList2 = Template.bind({});
ImageList2.args = {
  data: recommendedForYou, className: 'imageList--recommended portrait',
};

export const ImageList3 = Template.bind({});
ImageList3.args = {
  data: addedTLC, className: 'imageList--addedTLC landscape',
};

export const ImageList4 = Template.bind({});
ImageList4.args = {
  data: playLists, className: 'imageList--playlists landscape',
};

export const ImageList5 = Template.bind({});
ImageList5.args = {
  data: onNow, className: 'imageList--onNow landscape',
};
