# 以太坊入门
 * [以太坊白皮书](https://github.com/ethereum/wiki/blob/master/%5B中文%5D-以太坊白皮书.md)
 * [以太坊开发计划](https://github.com/ethereum/wiki/blob/master/%5B中文%5D-以太坊开发计划.md)
 * [Ethereum Overview](http://truffleframework.com/tutorials/ethereum-overview)

## [Choosing an Ethereum client](http://truffleframework.com/docs/getting_started/client)
See also [Choosing a client](http://ethdocs.org/en/latest/ethereum-clients/choosing-a-client.html)

目前可用的以太坊客户端有很多，并且很多都有坑。开发调试智能合约推荐使用 Geth (Version: 1.8.1-stable)

### 1. [Geth](https://github.com/ethereum/go-ethereum)
 * [Command Line Options](https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options)

#### 1.1 Installation
 * install on macOS `brew install ethereum`
 * install on [CentOS 6](./install-geth-on-centos6.md)

```bash
$ geth version 
Geth
Version: 1.8.1-stable
```

#### 1.2 Create a private network
[Create a private network](./create-private-network.md)

### 2. [Ganache](http://truffleframework.com/ganache)
Ganache is a personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run tests.

Ganache, when launched, runs on http://127.0.0.1:7545.

#### [Working with Ganache](http://truffleframework.com/docs/ganache/using)

#### metacoin issue
`Error: VM Exception while processing transaction: invalid JUMP at xxx`

非常困扰的问题。同样的代码，偶尔能成功调用合约，但多数时候会返回这个错误。

### 3. Truffle Develop
This will run the client on http://127.0.0.1:9545

### 4. Ganache CLI `npm install -g ganache-cli`

[ganache-cli@github](https://github.com/trufflesuite/ganache-cli/)

### 5. Others

 * [WebThree (cpp-ethereum)](https://github.com/ethereum/cpp-ethereum)
 * [Parity](https://github.com/paritytech/parity)
 * [More](https://www.ethereum.org/cli)

#### Ethereum Wallet
The [Ethereum Wallet](https://github.com/ethereum/mist/releases) is a gateway to decentralized applications on the Ethereum blockchain. It allows you to hold and secure ether and other crypto-assets built on Ethereum, as well as write, deploy and use smart contracts.


```bash
➜  ~ /Applications/Ethereum\ Wallet.app/Contents/MacOS/Ethereum\ Wallet --rpc /tmp/geth/nodechain/geth.ipc
# 配置快捷方式
alias wallet="/Applications/Ethereum\ Wallet.app/Contents/MacOS/Ethereum\ Wallet"
wallet --rpc http://localhost:8545
```

## [智能合约的开发](https://solidity.readthedocs.io/en/develop/)
以太坊去中心化的核心是其可以运行图灵完备的脚本语言，而开发以太坊智能合约则有四种语言：Serpent、Solidity、Mutan、LLL。这些语言都是面向底层设计的语言。目前来看，Solidity 是首选语言，这是由于它内置了 Serpent 语言的所有特性，语法类则似于使用广泛的 JavaScript。再加上 Solidity 的语言特性较少，该语言则可以更简单地实现完备的智能合约体系。

### 1. [Truffle](https://github.com/trufflesuite/truffle) `npm install -g truffle`
[Truffle](http://truffleframework.com/) 是针对基于以太坊的Solidity语言的一套开发框架。本身基于Javascript。
 * [中文文档](http://truffle.tryblockchain.org/) 比较过时，扫盲专用
 * [Command reference](http://truffleframework.com/docs/advanced/commands)

```bash
➜  ~ ✗ truffle version
Truffle v4.1.0 (core: 4.1.0)
Solidity v0.4.19 (solc-js)
➜  ~ ✗ npm update -g truffle
...
+ truffle@4.1.3
updated 2 packages in 82.479s
➜  metacoin-truffle-box git:(master) ✗ truffle version
Truffle v4.1.3 (core: 4.1.3)
Solidity v0.4.19 (solc-js)
```

### 2. [Solidity](http://solidity-cn.readthedocs.io/zh/latest/)
Solidity是一门面向合约的、为实现智能合约而创建的高级编程语言。这门语言受C++，Python和Javascript语言的影响，设计的目的是能在以太坊虚拟机（EVM）上运行。

### 3. [与合约交互](http://truffle.tryblockchain.org/truffle-InteractingWithContracts-与合约交互.html)
 * Transaction 交易： 需要GAS，改变网络状态，不立即执行，不暴露返还结果(仅返还交易ID)
 * Call 调用： 免费
 * Abstract 接口
 * Catching Events 捕获事件

## 分布式应用的开发

### TRUFFLE BOXES
Truffle Boxes are helpful boilerplates that allow you to focus on what makes your dapp unique. In addition to Truffle, Truffle Boxes can contain other helpful modules, Solidity contracts & libraries, front-end views and more; all the way up to complete example dapps.

 * [pet-shop](http://truffleframework.com/boxes/pet-shop)
 * [metacoin](http://truffleframework.com/boxes/metacoin)
 * [webpack](http://truffleframework.com/boxes/webpack)

### Tutorials
 * [Ethereum Pet Shop](http://truffleframework.com/tutorials/pet-shop)
 * [Building and testing a frontend app with Truffle](http://truffleframework.com/tutorials/building-testing-frontend-app-truffle-3)
 * [Building dapps for Quorum](http://truffleframework.com/tutorials/building-dapps-for-quorum-private-enterprise-blockchains) Private Enterprise Blockchains