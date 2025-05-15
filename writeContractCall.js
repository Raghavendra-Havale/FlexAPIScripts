const BlockchainAPIClient = require('./src/index.js');

async function writeContractCall() {
    try {
        const client = new BlockchainAPIClient();
        const callData = {
            userAddress: "0xd9b0FB89198312bBbDc974303cb7a460C8EC3edf",
            contractName: "SimpleStorage",
            functionArgs: [101],
            functionName: "store"
        };
        console.log('Calling contract function...');
        const result = await client.writeContractCall(callData);
        console.log('Function call successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

writeContractCall(); 