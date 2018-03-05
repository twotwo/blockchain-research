# 以太坊入门
 * [以太坊白皮书](https://github.com/ethereum/wiki/blob/master/%5B中文%5D-以太坊白皮书.md)
 * [以太坊开发计划](https://github.com/ethereum/wiki/blob/master/%5B中文%5D-以太坊开发计划.md)

## 工具安装
 * Ethereum Wallet 
 * [command line tools](https://www.ethereum.org/cli)
  - Geth `brew install ethereum`
  - Eth `brew install cpp-ethereum`
  - Pyethapp

## [智能合约的开发](https://solidity.readthedocs.io/en/develop/)
以太坊去中心化的核心是其可以运行图灵完备的脚本语言，而开发以太坊智能合约则有四种语言：Serpent、Solidity、Mutan、LLL。这些语言都是面向底层设计的语言。目前来看，Solidity 是首选语言，这是由于它内置了 Serpent 语言的所有特性，语法类则似于使用广泛的 JavaScript。再加上 Solidity 的语言特性较少，该语言则可以更简单地实现完备的智能合约体系。

### [Solidity](http://solidity-cn.readthedocs.io/zh/latest/)
Solidity是一门面向合约的、为实现智能合约而创建的高级编程语言。这门语言受C++，Python和Javascript语言的影响，设计的目的是能在以太坊虚拟机（EVM）上运行。

### [Truffle](http://truffleframework.com/) `npm install -g truffle`
[Truffle](http://truffle.tryblockchain.org/) 是针对基于以太坊的Solidity语言的一套开发框架。本身基于Javascript。

### [与合约交互](http://truffle.tryblockchain.org/truffle-InteractingWithContracts-与合约交互.html)
 * Transaction 交易： 需要GAS，改变网络状态，不立即执行，不暴露返还结果(仅返还交易ID)
 * Call 调用： 免费
 * Abstract 接口
 * Catching Events 捕获事件