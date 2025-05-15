const BlockchainAPIClient = require('../src/index.js');

async function readContractCall() {
    try {
        const client = new BlockchainAPIClient();
        const params = {
            contractName: 'RaghavLoyaltyToken',
            functionName: 'balanceOf',
            funcParams: '0x90e871117Df1741274eFe461A3680fbdca2fe3d7'
        };
        console.log('Querying contract function...');
        const result = await client.readContractCall(params);
        console.log('Function query successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

readContractCall(); 