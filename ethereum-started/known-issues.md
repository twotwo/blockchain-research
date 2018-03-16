# Known Issues

## To Be Solved

### Error: VM Exception while processing transaction: invalid JUMP at xxx
环境：truffle develop with MetaCoin

尝试的方法

1. 升级solc(solidity compiler in truffle)版本 //无效
2. 去掉MetaCoin.sol中对ConvertLib.sol的引用 //解决了balance为0的问题(在geth中)，但依然无法在truffle develop中执行

### Error: invalid sender - .."method":"eth_sendRawTransaction" ..
环境：metamask



## Fixed

### Fatal: Failed to start mining: etherbase missing: etherbase must be explicitly specified
环境：geth/truffle

带`--mine`参数启动失败，或者是`miner.start()`报错

原因是当前环境没有账户，需要建立一个账户 `web3.personal.importRawKey("c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3","password")`

### Error: insufficient funds for gas * price + value
环境：geth/truffle/wallet

试一下挖矿 `miner.start()`

### Error: intrinsic gas too low
环境：geth/truffle/wallet

提高一下 `truffle.js`中的 Gas Limit

### Error: exceeds block gas limit
环境：truffle

[创世区块](../ethereum-started/genesis.json)中设置的gasLimit太小，而Truffle中的默认值是4712388。

修改方法：在创世块中设置，换算成十六进制就是0x47e7c4。

或者指定 `truffle.js` 中的 gas limit值

```js
  networks: {
    development: {
      host: '172.16.100.70',
      port: 8545,
      //Gas limit used for deploys. Default is 4712388
      gas: '400000',
      from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
      network_id: '*' // Match any network id
    }
  }
```

```bash
truffle(development)> web3.eth.getBlock("pending").gasLimit
4712388
```