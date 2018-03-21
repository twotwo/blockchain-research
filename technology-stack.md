# Blockchain Technology Stack

区块链不是一种技术实现，而是一个系统的架构设计，使用一系列的技术组合用于完成去中心化的数据存储。比特币在区块链之上融入了金融学，货币学，博弈学，甚至一定程度的哲学思想，用于电子货币的发行，运行和交易。

## P2P网络

## 共识算法

 * `PoW` Proof of Work - 工作量证明
 * `PoS` Proof of Stake - 权益证明
 * `DPoS` Delegate Proof of Stake - 委托的权益证明
 * `Ripple Consensus` Ripple共识
 * `PBFT` Practical Byzantine Fault Tolerance - 实用拜占庭容错
 * `Stellar Consensus Protocol` 恒星共识协议

## 不对称加密算法

## CAP理论

## 最终一致性算法

## [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree)

默克尔树（Merkle tree）又被称做哈希树（hash tree）。在密码学及计算机科学中，是一种树形数据结构，每个叶节点均以数据块的哈希作为标签，而非叶节点则以其子节点标签的加密哈希作为标签。

哈希树能够高效、安全地验证大型数据结构的内容，是哈希链的推广形式。哈希树的概念由瑞夫·默克尔于 1979 年申请专利，故亦称默克尔树（Merkle tree）。

默克尔树是一种二叉树，由一组叶节点、一组中间节点和一个根节点构成。最下面的大量的叶节点包含基础数据，每个中间节点是它的两个子节点的哈希，根节点也是由它的两个子节点的哈希，代表了默克尔树的顶部。默克尔树的目的是允许区块的数据可以零散地传送：节点可以从一个源下载区块头，从另外的源下载与其有关的树的其它部分，而依然能够确认所有的数据都是正确的。

![Merkle Tree](./Merkle_Tree.svg)

## [UTXO(https://bitcoin.org/en/glossary/unspent-transaction-output)]

UTXO 即 Unspent Transaction Output，表示未花费的输出。比特币里没有账户概念，所有余额均通过 UTXO 计算而得。

在比特币社区里，Transaction 被简称为 TX，所以上面这个短语缩写为 UTXO。一般会认为 UTXO 是比特币区块链设计当中的一部分，但事实上 UTXO 和区块链没有必然的联系，你可以完全照搬比特币区块链，但不使用 UTXO。

HyperLedger 和Ethereum 一开始并没有采用 UTXO，现在前者已经切换回 UTXO，后者打算增加这个选项。

比特币系统的“状态”是所有已经被挖出的、没有花费的比特币（技术上称为“未花费的交易输出，unspent transaction outputs 或UTXO”）的集合。每个UTXO都有一个面值和所有者（由20个字节的本质上是密码学公钥的地址所定义）。一笔交易包括一个或多个输入和一个或多个输出。每个输入包含一个对现有UTXO的引用和由与所有者地址相对应的私钥创建的密码学签名。每个输出包含一个新的加入到状态中的UTXO。

## Reference
 * [如何用架构师思维解读区块链技术？](https://mp.weixin.qq.com/s/jyXsazsCGbStJFVT7el9vg)