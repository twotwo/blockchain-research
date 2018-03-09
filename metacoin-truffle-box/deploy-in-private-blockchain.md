# 把智能合约部署到一条私链上

## [Initialise the private blockchain](https://www.codeooze.com/blockchain/ethereum-geth-private-blockchain/)

### geth 启动发币
```bash
$ mkdir geth && cd geth
$ mkdir privchain
$ cp $ethereum-started/genesis.json .
$ geth --datadir privchain init genesis.json
$ geth --networkid 888888 --nodiscover --datadir="privchain" \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm" --fast
```

### node端登录并创建账户
```bash
# 远端登录没权限
$ geth attach http://172.16.100.70:8545
# 本地登录
$ geth attach privchain/geth.ipc
> personal.newAccount('password')
"0x3b82c1ea469033260c7fe4660b13a77996c33674"
> personal.listAccounts
["0x3b82c1ea469033260c7fe4660b13a77996c33674"]
> web3.eth.coinbase
"0x3b82c1ea469033260c7fe4660b13a77996c33674"
# unlock the default account
> personal.unlockAccount(web3.eth.coinbase, "password", 15000)
true
```


## 修改代码配置
[truffle.js配置参考](http://truffleframework.com/docs/advanced/configuration)

`truffle.js`

```js
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

```

## 部署及调用

```bash
truffle(development)> migrate --reset
Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0xd221b96f3670ccb66905714e736be93e24b2e1c320eba072144e7a6d5e666dee
  Migrations: 0x6e59300edc959b4c6f351187ede04f12b2bebd62
Saving successful migration to network...
  ... 0xdf050fc5b8513b9a81d6c1d67c9f2344f0465202768a49b14446b98149fa6c93
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing ConvertLib...
  ... 0xe1d30ce062f386966c5ddbe1e2a367acb7333fa76d784b3c60b5a014049cd0ad
  ConvertLib: 0xcea5efbc21ec647dbe8e63a6fa61be233b82fde9
  Linking ConvertLib to MetaCoin
  Replacing MetaCoin...
  ... 0xc8b5251a8efb43e9982ed238dbcfd551913d76e60fabdf61cd157a90a3f3a62b
  MetaCoin: 0x225b0bf59d58008dacf91e7b0430b460bc49562c
Saving successful migration to network...
  ... 0x7d0dffb8cd6227df83d131038868ef2c3289f8a45566ff28753cfe9437fa831b
truffle(development)> web3.personal.listAccounts
[ '0x3b82c1ea469033260c7fe4660b13a77996c33674' ]
truffle(development)> MetaCoin.deployed().then(function(instance){return instance.getBalance(web3.personal.listAccounts[0]);});
BigNumber { s: 1, e: 0, c: [ 0 ] }
```

### import a plain private key into geth
```bash
# 0x627306090abaB3A6e1400e9345bC60c78a8BEf57/c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3
web3.personal.importRawKey("c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3","password")
```