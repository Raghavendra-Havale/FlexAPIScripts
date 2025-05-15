const BlockchainAPIClient = require('./src/index.js');

async function compileAndCreateArtifact() {
    try {
        const client = new BlockchainAPIClient();
        const username = 'RaghavAdmin'; // Change as needed
        const filePath = './contracts/RaghavTicketNFT.sol'; // Path to your Solidity file
        console.log('Uploading and compiling contract...');
        const result = await client.compileAndCreateArtifact(username, filePath);
        console.log('Artifact created successfully:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

compileAndCreateArtifact(); 