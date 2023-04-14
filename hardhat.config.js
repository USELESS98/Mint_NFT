/**
 * @type import('hardhat/config').HardhatUserConfig
 */
  //changed the hardhat.config.js file to connect it to metamak and alchemy

require("dotenv").config({path:"./.env"});
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};