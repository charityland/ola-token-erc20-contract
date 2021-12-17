const OLATokenRC3 = artifacts.require("OLATokenRC3");

module.exports = function (deployer) {
  const initialSupply = 81000000;

  deployer.deploy(OLATokenRC3, initialSupply);
};
