type IChainMap = {
  [key: number]: string;
};

const chainMap: IChainMap = {
  1: 'mainnet',
  4: 'rinkeby',
  31337: 'localhost',
  137: 'matic',
  80001: 'mumbai',
};

export default chainMap;
