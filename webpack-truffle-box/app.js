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
var MetaCoin = contract(require("./build/contracts/MetaCoin.json"));
MetaCoin.setProvider(provider);

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，查看自己的客户端启动时，观察打印到控制台的地址
MetaCoin.defaults({
  from : "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
});

var meta;
MetaCoin.deployed().then(function(instance) {
  console.log("deployed");
  meta = instance;
  return meta.getBalance.call("0x627306090abaB3A6e1400e9345bC60c78a8BEf57");
}).then(function(value) {
  console.log(value);
}).catch(function(e) {
  console.log(e);
});