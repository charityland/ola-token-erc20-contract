// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// OLA Token RC3
//  * NOT mintable
//  * burnable
contract OLATokenRC3 is ERC20, ERC20Burnable, Ownable {
  string public _name = "OLA Token RC3";
  string public _symbol = "OLARC3";

  constructor(uint256 initialSupply) ERC20(_name, _symbol) {
    _mint(msg.sender, initialSupply * 10 ** decimals());
  }
}
