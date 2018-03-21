// var Test = artifacts.require("./Test.sol");
var Coin = artifacts.require("./Coin.sol");
module.exports = function(deployer) {
  // deployer.deploy(Test);
  deployer.deploy(Coin);
};