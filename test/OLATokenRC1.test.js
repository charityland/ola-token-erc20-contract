// const OLATokenRC1 = artifacts.require("OLATokenRC1");
//
// const chai = require('chai');
// const BN = require('bn.js');
// chai
//   .use(require('chai-bn')(BN))
//   .should();
//
// contract("OLATokenRC1", accounts => {
//   const _name = "OLA Token RC1";
//   const _symbol = "OLARC1";
//   const _decimals = 18;
//   const _initialSupply = 81000000;
//
//   describe("token attributes", function() {
//     beforeEach(async function() {
//       this.token = await OLATokenRC1.new(_initialSupply);
//     });
//
//     it("has the correct name", async function() {
//       const name = await this.token.name();
//
//       name.should.equal(_name);
//     });
//
//     it("has the correct symbol", async function() {
//       const symbol = await this.token.symbol();
//
//       symbol.should.equal(_symbol);
//     });
//
//     it("has the correct decimals", async function() {
//       const decimals = await this.token.decimals();
//       const expectedDecimals = new BN(_decimals);
//
//       (new BN(decimals)).should.be.a.bignumber.that.equals(expectedDecimals);
//     });
//   });
//
//   describe("initial supply", function() {
//     beforeEach(async function() {
//       this.tokenInstance = await OLATokenRC1.deployed();
//     });
//
//     it("has the correct initial supply", async function() {
//       const totalSupply = await this.tokenInstance.totalSupply();
//       // const expectedSupply = new BN(_initialSupply * (10 ** _decimals));
//
//       // (new BN(totalSupply)).should.be.a.bignumber.that.equals(expectedSupply);
//       (new BN(totalSupply)).toString().should.equal('81000000000000000000000000');
//     });
//
//     it("has the entire initial supply assigned to the sender address", async function() {
//       const senderBalance = await this.tokenInstance.balanceOf(accounts[0]);
//       // const expectedBalance = new BN(_initialSupply * (10 ** _decimals));
//
//       // (new BN(senderBalance)).should.be.a.bignumber.that.equals(expectedBalance);
//       (new BN(senderBalance)).toString().should.equal('81000000000000000000000000');
//     });
//   });
// });
