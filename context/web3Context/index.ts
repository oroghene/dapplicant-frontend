import React, { Dispatch, createContext, useReducer } from 'react';
import AppReducer, { IAction } from './reducer';

export interface IAppContextState {
  userOnChainId: number;
  provider: any;
  address: string;
  web3ReactLibrary: any;
}

export interface InitialContextProps {
  appState: IAppContextState;
  appDispatch: Dispatch<IAction>;
}

export const InitialAppContextState: IAppContextState = {
  userOnChainId: 0,
  provider: null,
  address: '',
  web3ReactLibrary: null,
};

export const Web3Context = createContext({} as InitialContextProps);

const Web3ContextProvider: React.FC = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    AppReducer,
    InitialAppContextState
  );

  return (
    <Web3Context.Provider value={{ appState, appDispatch }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;
