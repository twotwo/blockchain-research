var Test = artifacts.require("./Test.sol");
var Greeter = artifacts.require("./Greeter.sol");
module.exports = function(deployer) {
  deployer.deploy(Test);
  // deployer.deploy(Greeter);
};