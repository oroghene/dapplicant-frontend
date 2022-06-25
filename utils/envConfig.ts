const envConfig = {
  INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID || '',
  MAINNET: process.env.NEXT_PUBLIC_MAINNET === 'true' ? true : false,
  SAFEZEN_CA: process.env.NEXT_PUBLIC_SAFEZEN_CA || '',
  GOVERNANCE_CA: process.env.NEXT_PUBLIC_GOVERNANCE_CA || '',
  STAKING_CA: process.env.NEXT_PUBLIC_STAKING_CA || '',
};

export default envConfig;
