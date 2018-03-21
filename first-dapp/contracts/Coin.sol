pragma solidity ^0.4.18;

//https://solidity.readthedocs.io/en/develop/introduction-to-smart-contracts.html

contract Coin {
    // The keyword "public" makes those variables
    // readable from outside.
    address public minter;
    mapping (address => uint) public balances;

    // Events allow light clients to react on
    // changes efficiently.
    event Sent(address from, address to, uint amount);

    // This is the constructor whose code is
    // run only when the contract is created.
    function Coin() public {
        minter = tx.origin;
        balances[minter] = 10000;
    }

    function mint(address receiver, uint amount) public {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, uint amount) public {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }

    function sender() public view returns (address) { return msg.sender; }

    function balances(address _account) public view returns (uint) {
        return balances[_account];
    }
}