const BlockchainAPIClient = require('./src/index.js');

async function getEvents() {
    try {
        const client = new BlockchainAPIClient();
        const params = {
            contractAddress: '0xe6B1fdAf14f96Dc084AB995671F7ebbd6a50c022', // Change as needed
            eventName: 'Transfer' // Change as needed
        };
        console.log('Fetching contract events...');
        const result = await client.getEvents(params);
        console.log('Events fetched successfully:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getEvents(); 