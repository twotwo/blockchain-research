module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '172.16.100.70',
      port: 8545,
      from: '0x3b82c1ea469033260c7fe4660b13a77996c33674',
      network_id: '*' // Match any network id
    }
  }
};
