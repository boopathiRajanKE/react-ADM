import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Image } from '../../Atoms';
import { IImageListProps } from './typings';
import './style.css';

function ImageList(props: IImageListProps) {
  const { data = [], className = '', isSwiperSlide = false } = props;

  const renderImage = (item: string, index: number) => (isSwiperSlide
    ? (
      <SwiperSlide key={`image-${className}-${index}`}>
        <Image className={`molecule--imageList ${className}`} src={item} altText={`image-${className}-${index}`} />
      </SwiperSlide>
    )
    : <Image className={`molecule--imageList ${className}`} src={item} key={`image-${className}-${index}`} altText={`image-${className}-${index}`} />);

  return (
    <>{data.length > 0 && data.map(renderImage)}</>
  );
}

export default ImageList;
export { ImageList };
