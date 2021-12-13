import { ReactNode } from 'react';

export interface IImageProps {
  className?: string
  children?: ReactNode
  src: string
  altText: string
}
