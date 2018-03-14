let abi=[{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]; 
// truffle(dev)> MetaCoin.address
let address='0xf25186b5081ff5ce73482ad761db0eb0d25abfbf';
let metacoin = web3.eth.contract(abi).at(address);
// truffle(dev)> web3.eth.coinbase
let account='0x627306090abab3a6e1400e9345bc60c78a8bef57';
// metacoin.getBalance.call(account);
// metacoin.sendCoin.call(web3.eth.accounts[0], 1000, {from: account});

it("list account balance", function() {
  console.log('coinbase has '+web3.eth.getBalance(web3.eth.coinbase));
  console.log('metacoin.getBalance: '+metacoin.getBalance.call(account));
  console.log('metacoin.sendCoin: '+metacoin.sendCoin.call(web3.eth.accounts[0], 1000, {from: account}));
});