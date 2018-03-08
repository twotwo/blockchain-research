var Web3 = require('web3');
var contract = require("truffle-contract");

var provider = new Web3.providers.HttpProvider("http://localhost:7545");
// 解决 TypeError: Cannot read property 'apply' of undefined 问题
if (typeof provider.sendAsync !== "function") {
  provider.sendAsync = function() {
    return provider.send.apply(
      provider, arguments
    );
  };
}

// 使用truffle-contract包的contract()方法
// 请务必使用你自己编译的.json文件内容
// build/contracts/Test.json
var Test = contract(require("./build/contracts/Test.json"));
Test.setProvider(provider);

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，查看自己的客户端启动时，观察打印到控制台的地址
Test.defaults({
  from : "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
});

var deployed;
Test.deployed().then(function(instance) {
  console.log('deployed');
  deployed = instance;
  return instance.f.call();
}).then(function(result) {
  console.log(result);
  return deployed.g.call();
}).then(function(result) {
  console.log(result);
}).catch(function(err) {
  console.log(err);
});