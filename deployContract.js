const BlockchainAPIClient = require('./src/index.js');

async function deployContract() {
    try {
        const client = new BlockchainAPIClient();
        const deployData = {
            userAddress: '0xd9b0FB89198312bBbDc974303cb7a460C8EC3edf',
            artifactId: '6825943d30c423217626e654',
            contractName: 'RaghavTicketManager',
            contractArgs: ["0xD41912DB038C0718aD6D1385a28CBa3DAd3Dd314", "0xe6B1fdAf14f96Dc084AB995671F7ebbd6a50c022"]
        };
        console.log('Deploying contract...');
        const result = await client.deployContract(deployData);
        console.log('Contract deployed successfully:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

deployContract(); 