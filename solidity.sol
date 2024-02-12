// SimpleContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 private value;

    // Function to set the value
    function setValue(uint256 _newValue) public {
        value = _newValue;
    }

    // Function to get the value
    function getValue() public view returns (uint256) {
        return value;
    }
}
