# run pet-shop-tutorial with Truffle v4
[Ethereum Pet Shop](http://truffleframework.com/tutorials/pet-shop)

## 搭建本地运行环境
确保node已经正确安装
```bash
$ node -v
v8.9.1
```

### 1. Truffle
Install Truffle First: `npm i truffle -g`

```bash
$ truffle version
Truffle v4.1.0 (core: 4.1.0)
Solidity v0.4.19 (solc-js)
```

#### Create project
```bash
➜  pet-shop-tutorial git:(master) ✗ truffle unbox pet-shop
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
  Run dev server: npm run dev
```

#### 智能合约相关

```bash
# 编译
$ truffle compile
# 部署
$ truffle migrate
```

### 2. [Ganache](http://truffleframework.com/ganache)
a personal blockchain for Ethereum development you can use to deploy contracts, develop applications, and run tests.

a blockchain running locally on port 7545.

### 3. [MetaMask](https://metamask.io/)
a browser extension for Chrome, Firefox and Opera.

DApp 通过 MetaMask 调用链上智能合约完成 transaction

## Running the tests

首先把智能合约部署到本地链上

```bash
➜  pet-shop-tutorial git:(master) ✗ truffle test
Using network 'development'.

Compiling ./contracts/Adoption.sol...
Compiling ./test/TestAdoption.sol...
Compiling truffle/Assert.sol...
Compiling truffle/DeployedAddresses.sol...


  TestAdoption
    ✓ testUserCanAdoptPet (52ms)
    ✓ testGetAdopterAddressByPetId
    ✓ testGetAdopterAddressByPetIdInArray (75ms)


  3 passing (692ms)
```

## Using the dapp
```bash
➜  pet-shop-tutorial git:(master) ✗ npm run dev

> pet-shop@1.0.0 dev ../pet-shop-tutorial
> lite-server

** browser-sync config **
...
```