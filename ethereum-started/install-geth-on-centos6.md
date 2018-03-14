# Installing Geth On Centos6
 * [Installing Geth On Centos](http://blog.bradlucas.com/posts/2017-07-18-ethereum-installing-geth-on-centos/)

## Install Steps
```bash
# install golang
$ sudo rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
$ sudo yum install golang
$ sudo yum install gmp-devel
# ntp：网络时钟同步组件；Ethereum的rpc网络需要时间同步
$ sudo yum install ntp
$ sudo /etc/init.d/ntpd start
# git version 1.9+
$ git clone https://github.com/ethereum/go-ethereum
$ cd go-ethereum/
$ make geth
$ ls -al  build/bin/geth
-rwxrwxr-x. 1 li3huo li3huo 37136202 Mar  6 11:09 build/bin/geth
```

### Network Config
```bash
$ sudo vi /etc/sysconfig/iptables # add
-A INPUT -p tcp -m state --state NEW -m tcp --dport 8545 -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 30303 -j ACCEPT
$ sudo service iptables reload
```

### Run

参考 [Creating The Genesis Block](./create-private-network.md) #### 3.1 Starting Up Your Member Nodes

```bash
$ geth --datadir /home/geth/geth/privchain init genesis.json
$ geth --networkid 999 --datadir="/home/geth/geth/privchain" --port 30303 \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm" \
 --mine --minerthreads=1 --gasprice "18000000000"
```

`enode://8f3817bcccba64cf5de7316de3a0a1215e295f33f83345e97f9e5c60b70a53a03a47db851da97087ea2ac2881d1a8c848eaa9e6c282a26b04c3db188bdd22cfb@[::]:30303`


```bash
$ geth --datadir /tmp/geth/nodechain --networkid 999 --bootnodes enode://8f3817bcccba64cf5de7316de3a0a1215e295f33f83345e97f9e5c60b70a53a03a47db851da97087ea2ac2881d1a8c848eaa9e6c282a26b04c3db188bdd22cfb@172.16.100.70:30303  --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,miner,personal,rpc,evm"
```

## [Initialise the private blockchain](https://www.codeooze.com/blockchain/ethereum-geth-private-blockchain/)

### More

参考 [Creating The Genesis Block](./create-private-network.md) ### Creating The Genesis Block
