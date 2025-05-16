const BlockchainAPIClient = require('./src/index.js');

async function getEvents() {
    try {
        const client = new BlockchainAPIClient();
        const params = {
            contractName: 'RaghavTicketManager',
        };
        console.log('Fetching contract events...');
        const result = await client.getEvents(params);
        console.log('Events fetched successfully:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getEvents(); 