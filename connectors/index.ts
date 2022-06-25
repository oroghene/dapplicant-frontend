import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import envConfig from '../utils/envConfig';

const checkNetworkName = () => {
  if (
    typeof window !== 'undefined' &&
    window.location.hostname &&
    window.location.hostname === 'localhost'
  ) {
    // return 31337;
    // return 137;
    return 4;
  } else if (envConfig.MAINNET) {
    // return 137;
    return 1;
  } else {
    // return 80001;
    return 4;
  }
};

const generateRPCUrl = (chainId: number) => {
  switch (chainId) {
    case 1:
      return `https://mainnet.infura.io/v3/${envConfig.INFURA_ID}`;
    case 4:
      return `https://rinkeby.infura.io/v3/${envConfig.INFURA_ID}`;
    case 137:
      return `https://polygon-mainnet.infura.io/v3/${envConfig.INFURA_ID}`;
    case 80001:
      return `https://polygon-mumbai.infura.io/v3/${envConfig.INFURA_ID}`;
    case 31337:
      return `https://polygon-mumbai.infura.io/v3/${envConfig.INFURA_ID}`;
    default:
      return `https://polygon-mumbai.infura.io/v3/${envConfig.INFURA_ID}`;
  }
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 31337, 137, 80001],
});

export const coinbaseWallet = new WalletLinkConnector({
  url: generateRPCUrl(checkNetworkName()),
  appName: 'SafeZen',
  supportedChainIds: [1, 4, 31337, 137, 80001],
});

export const walletConnect = new WalletConnectConnector({
  rpc: {
    137: generateRPCUrl(137),
    80001: generateRPCUrl(80001),
    31337: generateRPCUrl(31337),
  },
  infuraId: envConfig.INFURA_ID,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});
