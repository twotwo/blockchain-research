# Create Private Network

## Reference
 * [Private network](https://github.com/ethereum/go-ethereum/wiki/Private-network)

## Working Steps

### 1. Choosing A Network ID
为每个节点设置标识: `--networkid 22`

### 2. Creating The Genesis Block

```bash
$ cd ethereum-started
$ mkdir -p /tmp/geth/privchain
$ geth --datadir /tmp/geth/privchain init genesis.json
```

### 3. Network Connectivity
所有节点共享创世状态的启动方式

 * Creating the rendezvous point 设置可以互相发现的节点 `bootnode`生成和设置key
 * Starting up your member nodes 使用 `--bootnodes` 标记启动子节点

#### 3.1 Starting Up Your Member Nodes

```bash
$ geth --networkid 22 --nodiscover --datadir="/tmp/geth/privchain" \
 --rpc --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm"
$ geth --networkid 22 --nodiscover --datadir="/tmp/geth/privchain" \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3" --fast \
 --gasprice 4000000000 --targetgaslimit 4712388
```

### 4. Running A Private Miner

```bash
# To start a Geth instance for mining
$ geth <usual-flags> --mine --minerthreads=1 --etherbase=0x0000000000000000000000000000000000000000
```