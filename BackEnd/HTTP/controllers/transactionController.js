const Web3 = require('web3');
const web3 = new Web3(process.env.BLOCKCHAIN_NODE_URL); // Add this in your .env file

const contractABI = [/* your contract ABI here */];
const contractAddress = process.env.CONTRACT_ADDRESS;

const contract = new web3.eth.Contract(contractABI, contractAddress);

exports.recordTransaction = async (req, res) => {
  try {
    const { from, action } = req.body;
    // Call contract method (example)
    await contract.methods.logTransaction(action).send({ from });
    res.json({ message: 'Transaction recorded on blockchain' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTransactionLogs = async (req, res) => {
  try {
    const logs = await contract.getPastEvents('TransactionLogged', { fromBlock: 0, toBlock: 'latest' });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
