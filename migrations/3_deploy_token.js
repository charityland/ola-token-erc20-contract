const OLATokenRC2 = artifacts.require("OLATokenRC2");

module.exports = function (deployer) {
  const initialSupply = 81000000;

  deployer.deploy(OLATokenRC2, initialSupply);
};
