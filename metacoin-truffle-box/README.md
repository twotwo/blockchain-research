# Truffle Boxes: metacoin
[metacoin](http://truffleframework.com/boxes/metacoin)

## Installing

```bash
➜  metacoin-truffle-box git:(master) ✗ truffle unbox metacoin
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile contracts: truffle compile
  Migrate contracts: truffle migrate
  Test contracts:    truffle test
```


## Configuring
 * `truffle.js` use Ganache, run at port 7545


## Running

```bash
➜  metacoin-truffle-box git:(master) ✗ truffle compile
Compiling ./contracts/ConvertLib.sol...
Compiling ./contracts/MetaCoin.sol...
Compiling ./contracts/Migrations.sol...
Writing artifacts to ./build/contracts
➜  metacoin-truffle-box git:(master) ✗ truffle migrate
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xe5d2b774517439cc260fbe0699662886d271e95504daf630578871195f4576a5
  Migrations: 0x18e124c2d34c7d8f99f30ebc0b21de94cea32c29
Saving successful migration to network...
  ... 0x5e4c05cd37c633a59c7d67d39b1c782e67e9d2ab8dab395b468816e76b2995d5
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying ConvertLib...
  ... 0x240354c39c803e6ceb6ab30b4bb34a28e8d69e78af0ed0eadf6e4d48e888738d
  ConvertLib: 0xdd56e578c079532a04d879391596ac95751d7fbc
  Linking ConvertLib to MetaCoin
  Deploying MetaCoin...
  ... 0x2c232259b1b41a8f6f15d905d9bb9692a5bf0c0162e9054121c180939dedb53c
  MetaCoin: 0xaa862ddac09f6736a61e1124040fd883a6533c19
Saving successful migration to network...
  ... 0xaa37e66933d63b56208591f48c703f0f67ef164a19d2f937d132599847fb8293
Saving artifacts...
➜  metacoin-truffle-box git:(master) ✗ truffle test 
...
➜  metacoin-truffle-box git:(master) ✗ truffle test test/metacoin.js # 跑指定的测试用例

```

## Interactions in `truffle develop`



```bash
Accounts:
(0) 0x627306090abab3a6e1400e9345bc60c78a8bef57
...
truffle(develop)> web3.eth.accounts
truffle(develop)> let account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";MetaCoin.deployed().then(function(instance){return instance.getBalance(account, { from: account, gas: 1000000 });});
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.balances;});
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.sendCoin("0x627306090abab3a6e1400e9345bc60c78a8bef57", 1000);});
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.getBalance("0x627306090abab3a6e1400e9345bc60c78a8bef57");});
truffle(develop)> .exit
```

## truffle commands

### truffle networks
Closely inspect the deployed networks below, and use `truffle networks --clean` to remove any networks that don't match your configuration.

### truffle develop
In order to facilitate error hunting, we will open a second console with logging. use `truffle develop --log` to see transaction IDs when a transaction fails.


## Issues

### Error: VM Exception while processing transaction: invalid JUMP at xxx
非常困扰的问题。同样的代码，偶尔能成功调用合约，但多数时候会返回这个错误。