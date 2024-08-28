const hre = require("hardhat");
const path = require("path");
const  fs = require("fs");
async function main(){
    const chai = await hre.ethers.getContractFactory("chai");
    const instance = await chai.deploy();
    await instance.waitForDeployment();
    console.log(`Contract deployed in:${await instance.getAddress()}`);
    const ContractAddress =await instance.getAddress();
    const  FilePath = path.join(__dirname,"ContractAddress.json");
    await fs.writeFileSync(FilePath,JSON.stringify({CONTRACT_ADDRESS:ContractAddress},null,2));
}
main().catch((error)=>{
    console.log(error.message);
    process.exitCode=1;
})