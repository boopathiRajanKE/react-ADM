import { ReactNode } from 'react';

export interface ILinkProps {
  text?: string | ReactNode
  url: string
  target?: string
  className?: string
  children?: ReactNode
}
