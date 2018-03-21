# My First DApp with web3.js & truffle-contract

## Dependency

```bash
➜  first-dapp git:(master) ✗ node -v
v8.9.1
➜  first-dapp git:(master) ✗ truffle version
Truffle v4.1.3 (core: 4.1.3)
Solidity v0.4.19 (solc-js)
```

## 初始化工程

### 1. 初始化 Truffle 框架工程
```bash
➜  ~ mkdir first-dapp && cd first-dapp
➜  first-dapp git:(master) ✗ truffle init
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
```

### 2. 初始化 Node.js 工程
```bash
➜  first-dapp git:(master) ✗ npm init -y

```

#### 2.1 安装 web3.js 和 truffle-contract
 * [web3](https://github.com/ethereum/web3.js) 通用JSON RPC API
 * [truffle-contract](https://github.com/trufflesuite/truffle-contract)

```bash
➜  hello-truffle git:(master) ✗ npm config set python /usr/local/opt/python@2/bin/python2.7
➜  hello-truffle git:(master) ✗ npm install web3 truffle-contract --save-dev
```

#### 2.2 安装 webpack 3 相关类库
 * [webpack](https://www.npmjs.com/package/webpack) 3.11.0
 * [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) 2.11.2

```bash
# $ npm install webpack webpack-cli webpack-dev-server --save-dev
$ npm install webpack@3.11 webpack-dev-server@2.11 --save-dev
$ npm install clean-webpack-plugin copy-webpack-plugin style-loader css-loader --save-dev
```

### 3. webpack 相关配置

配置逻辑参见 `config/webpack.config.js`

调用逻辑参见 `package.json`

打包代码参加 `src/`

## 部署和运行

### 1. 智能合约

```bash
➜  hello-truffle git:(master) ✗ truffle develop
truffle(develop)> compile
truffle(develop)> migrate
Using network 'develop'.

Network up to date.
truffle(develop)> let account = web3.personal.listAccounts[0];
truffle(develop)> Coin.deployed().then(function(instance){return instance.balances(account);});
BigNumber { s: 1, e: 4, c: [ 10000 ] }
truffle(develop)> Coin.deployed().then(function(instance){return instance.send(web3.personal.listAccounts[1],100);});
```

### 2. DApp

## 运行

```bash
➜  first-dapp git:(master) ✗ npm i
# 调试模式
➜  first-dapp git:(master) ✗ npm start
# 发布模式
➜  first-dapp git:(master) ✗ npm run build && open build/html/index.html
```

## 开发相关

### web3.js
 * [web3.js v1.0](http://web3js.readthedocs.io/en/1.0/index.html)
 * [web3.js v0.2x](https://github.com/ethereum/wiki/wiki/JavaScript-API)
