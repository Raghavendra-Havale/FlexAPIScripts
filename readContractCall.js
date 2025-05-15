const BlockchainAPIClient = require('./src/index.js');

async function readContractCall() {
    try {
        const client = new BlockchainAPIClient();
        const params = {
            contractName: 'RaghavTicketManager',
            functionName: 'admin',
            funcParams: ''
        };
        console.log('Querying contract function...');
        const result = await client.readContractCall(params);
        console.log('Function query successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

readContractCall(); 