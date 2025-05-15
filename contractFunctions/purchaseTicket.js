const BlockchainAPIClient = require('../src/index');

async function writeContractCall() {
    try {
        const client = new BlockchainAPIClient();

        const eventId=1;
        const noOfTickets=4;
        const paymentAmount=4000;


        const callData = {
            userAddress: "0x90e871117Df1741274eFe461A3680fbdca2fe3d7",
            contractName: "RaghavTicketManager",
            functionArgs: [eventId,noOfTickets,paymentAmount],
            functionName: "purchaseTicket"
        };
        console.log('Calling contract function...');
        const result = await client.writeContractCall(callData);
        console.log('Function call successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

writeContractCall(); 

