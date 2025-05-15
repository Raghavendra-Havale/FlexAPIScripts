require('dotenv').config();

const config = {
    blockchainApiUrl: process.env.BLOCKCHAIN_API_URL,
    apiKey: process.env.API_KEY,
    web3ProviderUrl: process.env.WEB3_PROVIDER_URL
};

// Debug: Log the actual values being used
console.log('Config values:', {
    blockchainApiUrl: config.blockchainApiUrl,
    apiKey: config.apiKey ? 'API Key is set' : 'API Key is missing',
    web3ProviderUrl: config.web3ProviderUrl || 'Not set'
});

// Validate required configuration
const requiredConfigs = ['blockchainApiUrl', 'apiKey'];
const missingConfigs = requiredConfigs.filter(key => !config[key]);

if (missingConfigs.length > 0) {
    throw new Error(`Missing required environment variables: ${missingConfigs.join(', ')}`);
}

module.exports = config; 