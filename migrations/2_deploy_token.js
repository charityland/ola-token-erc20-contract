const OLAToken = artifacts.require("OLAToken");

module.exports = function (deployer) {
  const initialSupply = 81000000;

  deployer.deploy(OLAToken, initialSupply);
};
