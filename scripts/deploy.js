const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTLibrary = await hre.ethers.getContractFactory("NFTLibrary");
  const nftlibrary = await NFTLibrary.deploy();
  await nftlibrary.deployed();
  console.log("nftlibrary deployed to:", nftlibrary.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftlibrary.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  const NFTVideo = await hre.ethers.getContractFactory("NFTVideo");
  const nftvideo = await NFTVideo.deploy();
  await nftvideo.deployed();
  console.log("nftVideo deployed to:", nftvideo.address);

  let config = `
  export const nftlibraryaddress = "${nftlibrary.address}"
  export const nftaddress = "${nft.address}"
  export const nftvideoaddress = "${nftlibrary.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
