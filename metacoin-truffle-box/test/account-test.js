var MetaCoin = artifacts.require("./MetaCoin.sol");

it("list account balance", function() {
  console.log('web3.eth.accounts: '+web3.eth.accounts);
  console.log('coinbase has '+web3.eth.getBalance(web3.eth.coinbase));
});