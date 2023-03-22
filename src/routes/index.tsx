// Pages
import { FC, ReactElement, ReactNode } from 'react';

interface IRoute {
  path: string;
  component: () => ReactElement;
  layout: ReactNode | FC;
}
const publicRoutes: Array<IRoute> = [
  { path: '/login', component: () => <div>Login</div>, layout: null },
];

const privateRoutes: Array<IRoute> = [
  { path: '/', component: () => <div>Hello</div>, layout: null },
];

export { publicRoutes, privateRoutes };
