const BlockchainAPIClient = require('./src/index.js');

async function testCreateAccount() {
    try {
        const client = new BlockchainAPIClient();
        
        // Example account data
        const accountData = {
            username: 'friendRaghav',
            accountUserType: 'User',
            userId: '68218a466fe21072bddef50a'
        };
        
        console.log('Creating account with data:', accountData);
        const account = await client.createAccount(accountData);
        console.log('Account created successfully:', account);
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Run the test
testCreateAccount(); 