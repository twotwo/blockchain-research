module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      //Gas limit used for deploys. Default is 4712388
      gas: 4000000,
      // 该交易中单位gas的价格（用以太币计算）: web3.toWei(2, 'gwei')
      // Gas price used for deploys. Default is 100000000000 (100 Shannon).
      // gasPrice: 2000000000,
      from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
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
    }, white: { //$ truffle migrate --network white
      host: '172.16.60.30',
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
