require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepiola: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/kcC74BIj4KNLy0W-JKmCaBASd5QgpLuy',
      accounts: ['5cb64cef0caa9c738aac226b506dd8c36fcf303d47ac7cf666d0119825ab2448'],
    },
  },
};