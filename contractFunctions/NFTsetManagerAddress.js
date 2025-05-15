const BlockchainAPIClient = require('../src/index');

async function writeContractCall() {
    try {
        const client = new BlockchainAPIClient();


        const callData = {
            userAddress: "0xd9b0FB89198312bBbDc974303cb7a460C8EC3edf",
            contractName: "RaghavTicketNFT",
            functionArgs: ["0xAB441F483e7a9fA47d6F3a0419990Ad04805f544"],
            functionName: "updateTicketManager"
        };
        console.log('Calling contract function...');
        const result = await client.writeContractCall(callData);
        console.log('Function call successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

writeContractCall(); 

