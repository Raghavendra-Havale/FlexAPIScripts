const BlockchainAPIClient = require('../src/index');

async function writeContractCall() {
    try {
        const client = new BlockchainAPIClient();

        const amount="500000000000000000";
        const to="0xbd9f4df6162Fb90B2D757e5596005f8b53A81f4d";


        const callData = {
            userAddress: "0x90e871117Df1741274eFe461A3680fbdca2fe3d7",
            contractName: "RaghavLoyaltyToken",
            functionArgs: [to,amount],
            functionName: "transfer"
        };
        console.log('Calling contract function...');
        const result = await client.writeContractCall(callData);
        console.log('Function call successful:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

writeContractCall(); 

