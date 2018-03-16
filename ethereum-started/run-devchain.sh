#!/bin/sh
datadir=/tmp/geth/devchain
geth --networkid 22 --datadir $datadir --port 30303 --rpcport 8545 \
 --rpc --rpcaddr 0.0.0.0 --rpcapi "eth,net,web3,admin,miner,personal,rpc,evm" \
 --mine --minerthreads=1 --gasprice "18000000000" console