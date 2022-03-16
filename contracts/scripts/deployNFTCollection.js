// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("RunnerCollection");
  const greeter = await Greeter.deploy(
      "Runner",
      "RUN",
      "https://ipfs.io/ipfs/QmTCsMc4vjxTSx4vfBz8ZDaugvF3XGcdWuxcN8HN8CobJ6/"
  );

  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  await greeter.mint(10);
  console.log("10 nfts minted")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
