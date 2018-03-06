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
$ sudo service iptables reload
```

### Run
```bash
$ ./go-ethereum/build/bin/geth --rpc --rpcaddr 0.0.0.0
```

## [Initialise the private blockchain](https://www.codeooze.com/blockchain/ethereum-geth-private-blockchain/)

### geth 启动发币
```bash
$ mkdir geth && cd geth
$ mkdir privchain
$ cp $ethereum-started/genesis.json .
$ geth --datadir privchain init genesis.json
$ geth --networkid 58342 --nodiscover --datadir="privchain" \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3"
```

### node端登录并创建账户
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