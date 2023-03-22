import { FC } from 'react';

import { BrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
interface CustomRouterProps {
  history: BrowserHistory;
  children: JSX.Element;
}

const CustomRouter: FC<CustomRouterProps> = ({ history, ...restProps }) => {
  return <BrowserRouter {...restProps}></BrowserRouter>;
};

export default CustomRouter;
