const OLATokenRC1 = artifacts.require("OLATokenRC1");

module.exports = function (deployer) {
  const initialSupply = 81000000;

  deployer.deploy(OLATokenRC1, initialSupply);
};
