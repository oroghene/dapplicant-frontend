/**
 * Get a shorten version of the user address
 * @param {*} address - string
 * @returns string
 */
export const getDisplayAddress = (address: string) => {
  if (!address) {
    return '';
  } else {
    return `${address.toString().slice(0, 4)}...${address
      .toString()
      .slice(-4)}`;
  }
};
