const BlockchainAPIClient = require('./src/index.js');

async function getAccountByName() {
    try {
        const client = new BlockchainAPIClient();
        const username = 'RaghavAdmin'; // Change as needed
        const account = await client.getAccountByUsername(username);
        console.log('Account details:', account);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getAccountByName(); 