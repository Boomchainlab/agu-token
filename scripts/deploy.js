const { ethers, upgrades } = require("hardhat");

async function main() {
  const AGUToken = await ethers.getContractFactory("AGUToken");
  const token = await upgrades.deployProxy(AGUToken, [process.env.INITIAL_OWNER], {
    initializer: "initialize"
  });
  await token.deployed();
  console.log("AGU Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
