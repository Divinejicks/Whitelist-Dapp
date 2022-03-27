const { ethers } = require("hardhat");

async function main() {
    const Whitelist = await ethers.getContractFactory("Whitelist");
    const whitelist = await Whitelist.deploy(10);
    await whitelist.deployed();

    console.log("whitelist deployed with address ", whitelist.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })