const OLATokenRC3 = artifacts.require("OLATokenRC3");

const chai = require('chai');
const BN = require('bn.js');
chai
  .use(require('chai-bn')(BN))
  .should();

contract("OLATokenRC3", accounts => {
  const _name = "OLA Token RC3";
  const _symbol = "OLARC3";
  const _decimals = 18;
  const _initialSupply = 81000000;

  describe("token attributes", function() {
    beforeEach(async function() {
      this.token = await OLATokenRC3.new(_initialSupply);
    });

    it("has the correct name", async function() {
      const name = await this.token.name();

      name.should.equal(_name);
    });

    it("has the correct symbol", async function() {
      const symbol = await this.token.symbol();

      symbol.should.equal(_symbol);
    });

    it("has the correct decimals", async function() {
      const decimals = await this.token.decimals();
      const expectedDecimals = new BN(_decimals);

      (new BN(decimals)).should.be.a.bignumber.that.equals(expectedDecimals);
    });
  });

  describe("initial supply", function() {
    let expectedSupply = new BN(_initialSupply).mul(new BN(10).pow(new BN(_decimals)));

    beforeEach(async function() {
      this.tokenInstance = await OLATokenRC3.deployed();
    });

    it("has the correct initial supply", async function() {
      const totalSupply = await this.tokenInstance.totalSupply();

      (new BN(totalSupply)).should.be.a.bignumber.that.equals(expectedSupply);
    });

    it("has the entire initial supply assigned to the sender address", async function() {
      const senderBalance = await this.tokenInstance.balanceOf(accounts[0]);

      (new BN(senderBalance)).should.be.a.bignumber.that.equals(expectedSupply);
    });
  });

  describe("minting rights", function() {
    let tokensToMint = 1000;

    beforeEach(async function() {
      this.tokenInstance = await OLATokenRC3.deployed();
    });

    it("does not allow to mint tokens", async function() {
      expect(() => this.tokenInstance.mint(accounts[0], tokensToMint)).to.throw('this.tokenInstance.mint is not a function');
    });
  });

  describe("burning rights", function() {
    let tokensToBurn = 2000;

    beforeEach(async function() {
      this.tokenInstance = await OLATokenRC3.deployed();
    });

    it("allows onwer to burn tokens", async function() {
      const expectedSupply = (await this.tokenInstance.totalSupply()).sub(new BN(tokensToBurn));
      await this.tokenInstance.burn(tokensToBurn);
      const actualSupply = await this.tokenInstance.totalSupply();

      (new BN(actualSupply)).should.be.a.bignumber.that.equals(expectedSupply);
    });

    xit("does not allow other addresses to burn tokens", async function() {
      await this.tokenInstance.changeAdmin(accounts[1], {from : accounts[0]});
      await this.tokenInstance.becomeAdmin({from: accounts[1]});
      await this.tokenInstance.mint(accounts[0], 1000);
      const totalSupply = await this.tokenInstance.totalSupply();

      (new BN(totalSupply)).toString().should.equal('81000000000000000000000000');
    });
  });
});
