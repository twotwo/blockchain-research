# Truffle Boxes: webpack
[This](http://truffleframework.com/boxes/webpack) box it our most bare official implementation with Webpack. Includes contracts, migrations, tests, user interface and webpack build pipeline.

参考 [Building and testing a frontend app with Truffle](http://truffleframework.com/tutorials/building-testing-frontend-app-truffle-3)

## Installation
 * 参考 [Using Truffle Develop and the console](http://truffleframework.com/docs/getting_started/console)

```bash
$ mkdir webpack-truffle-box && cd webpack-truffle-box
$ truffle unbox webpack
```

### 部署到 development blockchain

```bash
$ truffle develop # spawn a development blockchain locally on port 9545
truffle(develop)> compile
truffle(develop)> migrate
truffle(develop)> migrate --reset //重新设置地址
# 查看账号余额
truffle(develop)> MetaCoin.deployed().then(function(instance){return instance.getBalance("0x627306090abab3a6e1400e9345bc60c78a8bef57");});
BigNumber { s: 1, e: 4, c: [ 10000 ] }
# 保持 truffle develop 进程运行
$ npm run dev
```

### 部署到Ganache链
truffle.js: 7545

let account = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
MetaCoin.deployed().then(function(instance){return instance.getBalance(account);});

```bash
$ truffle compile
$ truffle migrate
$ npm run dev #开发模式
$ npm run build # open build/index.html
```

## Setting up MetaMask
 * 参考 [Truffle and MetaMask](http://truffleframework.com/docs/advanced/truffle-with-metamask)

In the box titled "New RPC URL" enter http://127.0.0.1:9545 and click Save.

 * 7545: Ganache链
 * 8545: Ganache CLI
 * 9545: truffle develop链

设置端口的代码 `app/javascripts/app.js`

## 查看智能合约执行的情况

```bash
$ truffle console
truffle(development)> networks

Network: development (id: 5777)
  ConvertLib: 0x059e17ceb15ef8470b7184b858d356317518aab3
  MetaCoin: 0xd95b1dbec167c6cf547d018ddecf41a4cb2e2f73
  Migrations: 0x8065f4c7b8c2bf53561af92d9da2ea022a0b28ca
```