# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
Prerequisites
Node =>12.0
´´´´

Start Out
```
cd nft-minting-portal
npm init -y
npm install --save-dev hardhat
npx hardhat
´´´

Required Dependencies
´´´
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npm install @openzeppelin/contracts

Edit .env according to hardhat.config.js
´´´

Compiling Smart Contracts
```
npx hardhat compile
´´´

Testing before deploying
```
npx hardhat run scripts/run.js
´´´

Deploy to rinkeby
```
npx hardhat run scripts/deploy.js --network rinkeby  // configure other networks in hardhat.config.js
```
