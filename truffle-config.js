const { projectId, mnemonic, walletSeq, etherscanApiKey } = require('./secrets.json');
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    rubylogic: {
      host: "ganache.rubylogic",
      port: 7545,
      network_id: "*",
      gasPrice: 85000000000,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `wss://ropsten.infura.io/ws/v3/${projectId}`, walletSeq)
      },
      network_id: 3,
      gas: 5500000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/ws/v3/${projectId}`, walletSeq)
      },
      network_id: 4,
      gas: 5500000
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `wss://mainnet.infura.io/ws/v3/${projectId}`, walletSeq)
      },
      network_id: 1,
      gas: 5500000,
      gasPrice: 49000000000
    }
  },
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: false,
        runs: 200
      }
      //  evmVersion: "byzantium"
      // }
    }
  },

  api_keys: {
    etherscan: etherscanApiKey
  }
};
