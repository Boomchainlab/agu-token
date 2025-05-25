require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: "0.8.22",
  networks: {
    base: {
      url: "https://mainnet.base.org", // Replace with actual provider
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
