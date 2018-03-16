# Create Private Network

## Reference
 * [Private network](https://github.com/ethereum/go-ethereum/wiki/Private-network)

## Working Steps

### 1. Choosing A Network ID
为每个节点设置标识: `--networkid 22`

### 2. Creating The Genesis Block
 * [meanings of genesis.json parameter](https://ethereum.stackexchange.com/questions/2376/what-does-each-genesis-json-parameter-mean)


```bash
$ cd ethereum-started
$ mkdir -p /tmp/geth/privchain
$ geth --datadir /tmp/geth/privchain init genesis.json
```

### 3. Network Connectivity
所有节点共享创世状态的启动方式

 * Creating the rendezvous point 设置可以互相发现的节点 `bootnode`生成和设置key
 * Starting up your member nodes 使用 `--bootnodes` 标记启动子节点
 * 参考 [Connecting to the network](https://github.com/ethereum/go-ethereum/wiki/Connecting-to-the-network)

#### 3.1 Starting Up Your Member Nodes

```bash
$ geth --networkid 22 --nodiscover --datadir="/tmp/geth/privchain" \
 --rpc --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm"
$ geth --networkid 22 --nodiscover --datadir="/tmp/geth/privchain" \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,miner,personal,rpc,evm" \
 --fast --gasprice 4000000000 --targetgaslimit 4712388
# Run a Developer Chain
$ datadir=/tmp/geth/privchain
$ geth --networkid 22 --dev --datadir $datadir --rpcport 8545 \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,miner,personal,rpc,evm"
> admin.nodeInfo.enode
"enode://832df7bd98fce56c0239eff33be20ba4855d398882413a2650ecfc342c8bc48fd15a9938605fd3f3ce736f7c4bea2042790bbda107330f713efa3709a074c130@[::]:30303"
```

```bash
# geth add peer
$ geth --datadir $datadir --networkid 15 --bootnodes admin.nodeInfo.enode@ip:30303
# or 
> admin.addPeer("enode://832df7bd98fce56c0239eff33be20ba4855d398882413a2650ecfc342c8bc48fd15a9938605fd3f3ce736f7c4bea2042790bbda107330f713efa3709a074c130@172.16.100.70:30303")
true
> net.peerCount
1
、、、


#### 3.2 Running A Private Miner

```bash
# To start a Geth instance for mining
$ geth <usual-flags> --mine --minerthreads=1 --etherbase=0x0000000000000000000000000000000000000000

MINER OPTIONS:
  --mine                    Enable mining
  --minerthreads value      Number of CPU threads to use for mining (default: 8)
  --etherbase value         Public address for block mining rewards (default = first account created) (default: "0")
  --targetgaslimit value    Target gas limit sets the artificial target gas floor for the blocks to mine (default: 4712388)
  --gasprice "18000000000"  Minimal gas price to accept for mining a transactions
  --extradata value         Block extra data set by the miner (default = client version)
```

### 4. Come tegether

```bash
$ geth --networkid 22 --nodiscover --datadir="/tmp/geth/privchain" \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm" \
 --mine --minerthreads=1 --gasprice "18000000000"

# 启动子节点
$ geth --networkid 999 --datadir /tmp/geth/nodechain1 --bootnodes enode://8f3817bcccba64cf5de7316de3a0a1215e295f33f83345e97f9e5c60b70a53a03a47db851da97087ea2ac2881d1a8c848eaa9e6c282a26b04c3db188bdd22cfb@172.16.100.70:30303  \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm" \
 --mine --minerthreads=1 --gasprice "18000000000"
```

### 5. 客户端的操作

#### 5.1 新建账号
```bash
# 远端登录没权限
$ geth attach http://172.16.100.70:8545
# 本地登录
$ geth attach privchain/geth.ipc
> personal.newAccount('password')
"0x3b82c1ea469033260c7fe4660b13a77996c33674"
> personal.listAccounts
["0x3b82c1ea469033260c7fe4660b13a77996c33674"]
> web3.eth.coinbase
"0x3b82c1ea469033260c7fe4660b13a77996c33674"
# unlock the default account
> personal.unlockAccount(web3.eth.coinbase, "password", 15000)
true
```

#### 5.2 import a plain private key into geth
```bash
# 0x627306090abaB3A6e1400e9345bC60c78a8BEf57/c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3
web3.personal.importRawKey("c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3","password")
# 0xf17f52151EbEF6C7334FAD080c5704D77216b732/ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f
web3.personal.importRawKey("ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f","password")
```

#### 5.3 eth coin
```bash
//eth.getBalance - 查询余额
eth.getBalance(eth.coinbase)

//解锁转出账号
personal.unlockAccount(web3.eth.coinbase, "password", 15000)

// eth.sendTransaction - 转账
# myAccount = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
eth.sendTransaction({from:personal.listAccounts[0], to: personal.listAccounts[1], gas: 1*1000, value:web3.toWei(1,"ether")});
eth.getBalance(personal.listAccounts[0]);
```

#### 5.4 unlock account
```bash
web3.personal.unlockAccount(web3.eth.coinbase, "password", 15000)
```
