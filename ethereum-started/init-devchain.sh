#!/bin/sh
datadir=/tmp/geth/devchain
rm -rf $datadir
mkdir -p $datadir # or rm -rf $datadir
set -x
geth --datadir $datadir --networkid 22 init genesis.json
echo password > cipher.txt
geth --datadir $datadir --password cipher.txt account new #run twice
echo run run-geth.sh to launch node