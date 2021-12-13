// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OLATokenRC1 is ERC20 {
  string public _name = "OLA Token RC1";
  string public _symbol = "OLARC1";

  constructor(uint256 initialSupply) ERC20(_name, _symbol) {
    _mint(msg.sender, initialSupply * 10 ** decimals());
  }
}
