export const SF_MAIN_MATICX = '0x3aD736904E9e65189c3000c7DD2c8AC8bB7cD4e3';
export const SF_MAIN_CFAV1 = '0x6EeE6060f715257b970700bc2656De21dEdF074C';
export const SF_MAIN_SUPERTOKENFACTORY =
  '0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34';

export const SF_TEST_MATICX = '0x96B82B65ACF7072eFEb00502F45757F254c2a0D4';
export const SF_TEST_CFAV1 = '0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873';
export const SF_TEST_SUPERTOKENFACTORY =
  '0x200657E2f123761662567A1744f9ACAe50dF47E6';
export const SFT_TEST_fDAIx = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f';

export const SF_TEST_MATICX_ABI = [
  {
    inputs: [{ internalType: 'contract IWETH', name: 'weth', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TokenDowngraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TokenUpgraded',
    type: 'event',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    inputs: [{ internalType: 'uint256', name: 'wad', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'wad', type: 'uint256' }],
    name: 'downgradeToETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ internalType: 'address', name: 'tokenAddr', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'initialAddress', type: 'address' },
    ],
    name: 'initializeProxy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'wad', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'upgradeByETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'upgradeByETHTo',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'wad', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
