/* eslint-disable no-case-declarations */
import { SET_SUPERFLUID_CONTRACT } from '../actionType';
import { InitialAppContextState, IAppContextState } from '.';

export interface IAction {
  type: typeof SET_SUPERFLUID_CONTRACT;
  value: any;
}

const Web3Reducer = (
  state: IAppContextState,
  action: IAction
): IAppContextState => {
  switch (action.type) {
    case SET_SUPERFLUID_CONTRACT:
      return {
        ...state,
        MATICxContract: action.value.MATICx,
        SuperTokenFactory: action.value.SF,
        // fUSDCxContract: action.value.fUSDCx,
        fDAIxContract: action.value.fDAIx,
      };
    default:
      return state;
  }
};

export default Web3Reducer;
