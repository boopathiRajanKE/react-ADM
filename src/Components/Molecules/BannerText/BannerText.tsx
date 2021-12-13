import React from 'react';
import {
  Image, Heading, Button, Text,
} from '../../Atoms';
import { playIcon } from '../../../Assets/Icons';
import './style.css';

function BannerText() {
  return (
    <div className="molecule--bannerText">
      <Image className="bannerText--image" src="https://cdn.zeplin.io/5e583f939b80ce69bc0255b7/assets/660DA3BC-3314-474B-BB10-0EED8ADADF58.png" altText="America" />
      <Heading className="bannerText--heading" tagName="h5" text="Season Premiere" />
      <Text className="bannerText--text" text="Lorem ipsum dolor sit amet, consecteturadipae" />
      <Button className="bannerText--button">
        {playIcon()}
        <Text tagName="span" text="Watch Now" />
      </Button>
    </div>
  );
}

export default BannerText;
export { BannerText };
