import { ReactNode } from 'react';

export interface ITextProps {
  text?: string | ReactNode
  tagName?: string
  className?: string
  children?: ReactNode
}
