const BlockchainAPIClient = require('../src/index');

async function writeContractCall() {
    try {
        const client = new BlockchainAPIClient();

        const eventName="Concert";
        const startTimestamp="1747467099";
        const endTimestamp="1747639899";
        const price="1000";
        const reward="10000000000000000000";
        const totalTickets="100";


        const callData = {
            userAddress: "0xd9b0FB89198312bBbDc974303cb7a460C8EC3edf",
            contractName: "RaghavTicketManager",
            functionArgs: [eventName,startTimestamp,endTimestamp,price,reward,totalTickets],
            functionName: "createEvent"
        };
        console.log('Calling contract function...');
        const result = await client.writeContractCall(callData);
        console.log('Function call successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

writeContractCall(); 

