// USAGE: npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS

require("@nomiclabs/hardhat-etherscan");
const { etherscanApiKey } = require('./secrets.json');

module.exports = {
  etherscan: {
    apiKey: etherscanApiKey
  }
};
