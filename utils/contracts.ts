import chainMap from './constants/chains';
import { ethers } from 'ethers';
import envConfig from './envConfig';

export const getMainContract = (chainId: number) => {
  let chain = chainMap[chainId];

  try {
    /* eslint-disable global-require */
    const contract = require(`../contracts/${chain}/SafeZen.json`);
    /* eslint-enable global-require */
    return new ethers.Contract(envConfig.SAFEZEN_CA, contract.abi, undefined);
  } catch (error) {
    console.error('Contract does not exist!');
  }
};

export const getGovernanceContract = (chainId: number) => {
  let chain = chainMap[chainId];

  try {
    /* eslint-disable global-require */
    const contract = require(`../contracts/${chain}/Governance.json`);
    /* eslint-enable global-require */
    return new ethers.Contract(
      envConfig.GOVERNANCE_CA,
      contract.abi,
      undefined
    );
  } catch (error) {
    console.error('Contract does not exist!');
  }
};

export const getStakingContract = (chainId: number) => {
  let chain = chainMap[chainId];

  try {
    /* eslint-disable global-require */
    const contract = require(`../contracts/${chain}/Staking.json`);
    /* eslint-enable global-require */
    return new ethers.Contract(envConfig.STAKING_CA, contract.abi, undefined);
  } catch (error) {
    console.error('Contract does not exist!');
  }
};
