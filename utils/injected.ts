export enum ProviderType {
  COINBASE = 'COINBASE',
  METAMASK = 'METAMASK',
}

export const activateInjectedProvider = (providerName: ProviderType) => {
  const { ethereum } = window;

  if (!ethereum?.providers) {
    return undefined;
  }

  let provider;
  switch (providerName) {
    case ProviderType.COINBASE:
      provider = ethereum.providers.find(
        ({ isCoinbaseWallet }: { isCoinbaseWallet: any }) => isCoinbaseWallet
      );
      break;
    case ProviderType.METAMASK:
      provider = ethereum.providers.find(
        ({ isMetaMask }: { isMetaMask: any }) => isMetaMask
      );
      break;
  }

  if (provider) {
    ethereum.setSelectedProvider(provider);
  }
};
