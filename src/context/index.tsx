import React, { ReactElement, useState } from 'react';

export interface IState {
  profile?: any;
}

export type AppContextType = {
  state: IState;
  setState: (todo: IState) => void;
};

const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactElement }) => {
  const [state, setState] = useState({});
  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
