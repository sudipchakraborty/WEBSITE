const { ethers } = require("ethers");
require("dotenv").config();
const fs = require("fs");
const path = require("path");


// Load the ABI file
// Dynamically resolve the correct path to the ABI JSON
const abiPath = path.resolve(__dirname, "../src/contracts/Greeter.json");
const abi = JSON.parse(fs.readFileSync(abiPath)).abi;

// Create provider connected to Ganache
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

// Connect wallet using private key (bypassing Metamask)
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Create contract instance with wallet signer
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

// Function to read data (no gas cost)
const readGreeting = async () => {
  return await contract.greet();
};

// Function to write data (signed and broadcast from backend)
const setGreeting = async (newGreeting) => {
  const tx = await contract.setGreeting(newGreeting);
  await tx.wait();
  return tx.hash;
};

module.exports = { readGreeting, setGreeting };
