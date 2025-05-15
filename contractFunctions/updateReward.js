const BlockchainAPIClient = require('../src/index');

async function writeContractCall() {
    try {
        const client = new BlockchainAPIClient();
        const eventId=1;
        const newrewardAmount="50000000000000000000";

        const callData = {
            userAddress: "0xd9b0FB89198312bBbDc974303cb7a460C8EC3edf",
            contractName: "RaghavTicketManager",
            functionArgs: [eventId,newrewardAmount],
            functionName: "updateReward"
        };
        console.log('Calling contract function...');
        const result = await client.writeContractCall(callData);
        console.log('Function call successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

writeContractCall(); 

