import { ReactNode } from 'react';

export interface IButtonProps {
  text?: string | ReactNode
  tagName?: string
  className?: string
  children?: ReactNode
  onClick?: () => void
}
