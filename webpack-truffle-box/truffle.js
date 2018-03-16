// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      //Gas limit used for deploys. Default is 4712388
      gas: 4000000,
      // 该交易中单位gas的价格（用以太币计算）: web3.toWei(2, 'gwei')
      // Gas price used for deploys. Default is 100000000000 (100 Shannon).
      // gasPrice: 20000000,
      // from web3.eth.coinbase
      // from: '0x3df4650aaf668cdfc8c0f8592ceda0cce3ce2a5f',
      network_id: '*' // Match any network id
    }, dev: { //$ truffle migrate --network dev
      host: '172.16.100.70',
      port: 8545,
      //Gas limit used for deploys. Default is 4712388
      gas: 4000000,
      // 该交易中单位gas的价格（用以太币计算）: web3.toWei(2, 'gwei')
      // Gas price used for deploys. Default is 100000000000 (100 Shannon).
      // gasPrice: 20000000,
      // from web3.eth.coinbase
      from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
      network_id: '*' // Match any network id
    }
  }
};
