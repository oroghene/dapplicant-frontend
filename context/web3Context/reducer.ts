/* eslint-disable no-case-declarations */
import { SET_WEB3_PROVIDER, RESET_WEB3_PROVIDER } from '../actionType';
import { InitialAppContextState, IAppContextState } from '.';

export interface IAction {
  type: typeof SET_WEB3_PROVIDER | typeof RESET_WEB3_PROVIDER;
  value: any;
}

const Web3Reducer = (
  state: IAppContextState,
  action: IAction
): IAppContextState => {
  switch (action.type) {
    case SET_WEB3_PROVIDER:
      return {
        ...state,
        userOnChainId: action.value.userOnChainId,
        provider: action.value.provider,
        web3ReactLibrary: action.value.web3ReactLibrary,
      };
    case RESET_WEB3_PROVIDER:
      return InitialAppContextState;
    default:
      return state;
  }
};

export default Web3Reducer;
