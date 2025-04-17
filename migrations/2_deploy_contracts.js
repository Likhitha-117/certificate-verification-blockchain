const Certificate = artifacts.require("Certificate");

module.exports = async function (deployer) {
  // Deploy the contract
  await deployer.deploy(Certificate);
  console.log("Certificate contract deployed!");
};
