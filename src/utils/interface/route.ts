import { FC } from 'react';
import { ReactNode } from 'react';
import { ReactElement } from 'react';

export interface IRoute {
  path: string;
  component: () => ReactElement;
  layout: ReactNode | FC;
}
