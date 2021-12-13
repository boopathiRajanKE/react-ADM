import { ReactNode } from 'react';

export interface IHeadingProps {
  text?: string | ReactNode
  tagName?: string
  className?: string
  children?: ReactNode
  args?: any
}
