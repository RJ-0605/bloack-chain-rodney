// SPDX-Licensce-Identifier: MIT
pragma solidity ^0.8.0;

/*
1. create your contract ----> solidity
2. compile it 
3. deploy 
*/

contract Collectible {
    string _name;

    function getName() view public returns (string memory){
        return _name;
    }

    function setName(string memory name) public {
        _name = name;
    }
}