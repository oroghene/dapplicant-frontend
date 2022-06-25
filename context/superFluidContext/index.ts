import React, { Dispatch, createContext, useReducer } from 'react';
import AppReducer, { IAction } from './reducer';

export interface IAppContextState {
  MATICxContract: any;
  fUSDCxContract: any;
  fDAIxContract: any;
  SuperTokenFactory: any;
}

export interface InitialContextProps {
  appState: IAppContextState;
  appDispatch: Dispatch<IAction>;
}

export const InitialAppContextState: IAppContextState = {
  MATICxContract: null,
  fUSDCxContract: null,
  fDAIxContract: null,
  SuperTokenFactory: null,
};

export const SuperFluidContext = createContext({} as InitialContextProps);

const SuperFluidContextProvider: React.FC = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    AppReducer,
    InitialAppContextState
  );

  return (
    <SuperFluidContext.Provider value={{ appState, appDispatch }}>
      {children}
    </SuperFluidContext.Provider>
  );
};

export default SuperFluidContextProvider;
