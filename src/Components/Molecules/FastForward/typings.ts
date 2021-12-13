import { ReactNode } from 'react';
import { ILinkProps } from '../../Atoms';

export interface IFastForwardProps extends ILinkProps {
    text: string | ReactNode
    tagName?: string
    icon: () => void
}
