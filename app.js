// Connect to the Ethereum network
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // Handle the case where the user doesn't have MetaMask or another provider
    alert("Please install MetaMask or another Ethereum provider to interact with this application.");
}

// Define the contract ABI (Application Binary Interface)
const contractABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newValue",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// Define the contract address
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your actual contract address

// Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to get the value from the contract
async function getValue() {
    try {
        const value = await contract.methods.getValue().call();
        document.getElementById('storedValue').innerText = value;
    } catch (error) {
        console.error('Error getting value from contract:', error);
    }
}
