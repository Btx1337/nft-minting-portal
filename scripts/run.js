const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to: ", nftContract.address)

    // call the function to mint
    let txn = await nftContract.makeAnEpicNFT()
    // wait for txn to be mined
    await txn.wait()


    // Mint a second nft
    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

runMain();