// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
contract MyToken{
    string public tokenName ="harsh";
    string public tokenAbbry ="meta";
    uint public  totalSupply=0;

    mapping(address=>uint) public balances;

    function mint(address _address,uint _value) public {
        totalSupply += _value;
        balances[_address] += _value;
    }
    function burn (address _address,uint _value) public {
        if(balances[_address]>=_value){
        totalSupply -= _value;
        balances[_address] -= _value;
    }
    }

}
