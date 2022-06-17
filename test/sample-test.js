const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Accountancy", function () {
  it("Should return the new List once it's changed", async function () {
    const Accountancy = await ethers.getContractFactory("Accountancy");
    const accountancy = await Accountancy.deploy("Hello, world!");
    await accountancy.deployed();

    expect(await accountancy.getList()).to.equal("Hello, world!");

    const setAccountancyTx = await accountancy.addList([0 , "hello"]);

    // wait until the transaction is mined
    await setAccountancyTx.wait();

    expect(await accountancy.getList()).to.equal("Hola, mundo!");
  });
});
