// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OLATokenRC2 is ERC20, ERC20Burnable, Ownable {
  string public _name = "OLA Token RC2";
  string public _symbol = "OLARC2";

  constructor(uint256 initialSupply) ERC20(_name, _symbol) {
    _mint(msg.sender, initialSupply * 10 ** decimals());
  }

  function mint(address to, uint256 amount) public onlyOwner {
      _mint(to, amount);
  }
}
