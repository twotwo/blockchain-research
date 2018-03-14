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

## Running

### Deploy on Ganache Chain(7545)
 * `truffle.js` use Ganache, run at port 7545

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

### Deploy on Develop Chain(9545)
 * `truffle.js` config port 9545
 * Interactions in `truffle develop`

```bash
# Get All Accounts:
(0) 0x627306090abab3a6e1400e9345bc60c78a8bef57
...
truffle(develop)> web3.eth.accounts
...
# MetaCoin地址: 0x7a0b88a255af23199c399252f16453db3026e80c
truffle(development)> networks

Network: development (id: 888888)
  ConvertLib: 0x893686151e5b679e3f8018059cacc8038c1ee729
  MetaCoin: 0x7a0b88a255af23199c399252f16453db3026e80c
  Migrations: 0x8cdaf0cd259887258bc13a92c0a6da92698644c0
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.getBalance("0x7a0b88a255af23199c399252f16453db3026e80c");});
truffle(develop)> let account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";MetaCoin.deployed().then(function(instance){return instance.getBalance(account, { from: account, gas: 1000000 });});
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.balances;});
# MetaCoin手工转账
web3.personal.unlockAccount(web3.eth.accounts[1], "password", 15000);
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.sendCoin(web3.eth.accounts[0], 1000, {from: web3.eth.accounts[1]});});
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.getBalance(web3.eth.accounts[0]);});
truffle(develop)> .exit
```

### Deploy on a Private Chain(8545)
 * 参考 [创建私有链](../ethereum-started/create-private-network.md)## Working Steps
 * [truffle.js配置参考](http://truffleframework.com/docs/advanced/configuration)

```bash
$ truffle console --network dev
truffle(dev)> migrate --reset
# Error: authentication needed: password or unlock
truffle(dev)> web3.personal.unlockAccount(web3.eth.coinbase, "password", 15000)
true
truffle(dev)> compile
truffle(dev)> migrate
truffle(dev)> MetaCoin.deployed().then(function(instance){return instance.getBalance(web3.personal.listAccounts[0]);});
BigNumber { s: 1, e: 0, c: [ 0 ] }

```

## Testing
 * [Writing Tests in JavaScript](http://truffleframework.com/docs/getting_started/javascript-tests)

### `test/account-test.js`

```bash
# unlock manage account
truffle(development)> web3.personal.unlockAccount(web3.eth.coinbase, "password", 15000);
true
truffle(development)> test test/account-test.js
Using network 'development'.

web3.eth.accounts: 0x3b82c1ea469033260c7fe4660b13a77996c33674,0x627306090abab3a6e1400e9345bc60c78a8bef57
coinbase has 6.97352851527e+22
  ✓ list account balance (304ms)

  1 passing (305ms)
```

### `test/metacoin-remote.js`

```bash
# unlock manage account
truffle(development)> web3.personal.unlockAccount(web3.eth.coinbase, "password", 15000);
true
truffle(development)> test test/metacoin-remote.js
Using network 'development'.

web3.eth.accounts: 0x3b82c1ea469033260c7fe4660b13a77996c33674,0x627306090abab3a6e1400e9345bc60c78a8bef57
coinbase has 6.97352851527e+22
  ✓ list account balance (304ms)

  1 passing (305ms)
```

## truffle commands
[Command reference](http://truffleframework.com/docs/advanced/commands)

### truffle console
`truffle console --network <networks in truffle.js>`

### truffle networks
Closely inspect the deployed networks below, and use `truffle networks --clean` to remove any networks that don't match your configuration.

### truffle develop
In order to facilitate error hunting, we will open a second console with logging. use `truffle develop --log` to see transaction IDs when a transaction fails.

### truffle exec
`truffle exec <script.js> [--network <name>]`