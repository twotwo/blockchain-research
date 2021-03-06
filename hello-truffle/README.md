# Truffle 4 integrate Node.js
 * 参考 [Truffle3.0集成NodeJS](http://truffle.tryblockchain.org/truffle3.0-integrate-nodejs.html)

## Dependency

```bash
➜  hello-truffle git:(master) ✗ node -v
v8.9.1
➜  hello-truffle git:(master) ✗ truffle version
Truffle v4.1.0 (core: 4.1.0)
Solidity v0.4.19 (solc-js)
```

## 初始化工程

### 初始化 Truffle 框架工程
```bash
➜  hello-truffle git:(master) ✗ truffle init
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
```

### 初始化 Node.js 工程
```bash
➜  hello-truffle git:(master) ✗ npm init
...
Press ^C at any time to quit.
package name: (hello-truffle) 
version: (1.0.0) 
description: 
entry point: (truffle-config.js) app.js
test command: jest
git repository: 
keywords: 
author: li3huo
license: (ISC) MIT
...
```

### 安装所需类库
 * [truffle-contract](https://github.com/trufflesuite/truffle-contract)
 * [web3](https://github.com/ethereum/web3.js) 通用JSON RPC API

```bash
➜  hello-truffle git:(master) ✗ npm install truffle-contract
➜  hello-truffle git:(master) ✗ npm config set python /usr/local/opt/python@2/bin/python2.7
➜  hello-truffle git:(master) ✗ npm install web3
```

## 创建合约

### 发布合约

```bash
➜  hello-truffle git:(master) ✗ truffle migrate
Using network 'development'.

Running migration: 2_deploy_contracts.js
  Deploying Test...
  ... 0xa5d87521469dbc6fd0745ee1bf5edb52d84b7e16b91ac7e7eaed5ad09b40a984
  Test: 0x98d9f9e8debd4a632682ba207670d2a5acd3c489
Saving successful migration to network...
  ... 0x21ffbe6dcbb17b90724d0fb0f4e982cc1f0a5ba411d2375036b9fa3ac9df72fd
Saving artifacts...
```

## 后端调用合约 `app.js`

### [TypeError: Cannot read property 'apply' of undefined](https://github.com/trufflesuite/truffle-contract/issues/57)

```js
let contract = Contract(artifacts);
contract.setProvider(web3.currentProvider);
//dirty hack for web3@1.0.0 support for localhost testrpc, see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
if (typeof contract.currentProvider.sendAsync !== "function") {
  contract.currentProvider.sendAsync = function() {
    return contract.currentProvider.send.apply(
      contract.currentProvider, arguments
    );
  };
}
```

## 与浏览器集成
 * [Your first Dapp](https://dappsforbeginners.wordpress.com/tutorials/your-first-dapp/)
 * [Bundling with Webpack](http://truffleframework.com/tutorials/building-dapps-for-quorum-private-enterprise-blockchains) 主要参考这个

### Install dependencies

```bash
# 放弃 truffle-solidity-loader --非常重，2年多没更新了
$ npm install webpack webpack-dev-server --save-dev
```

### Set up Your Webpack Configuration
webpack.config.js


## 项目结构
 * Dapp前端 纯静态页面
 * Dapp后端 Node.js 应用
 * MetaMask 浏览器插件对应账号系统