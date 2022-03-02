// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract BaseContract {
    uint256 public balance;

    function balanceOf() public view returns (uint256) {
        return balance;
    }
}
