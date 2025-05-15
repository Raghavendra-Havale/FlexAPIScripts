const axios = require('axios');
const config = require('./config');
const FormData = require('form-data');
const fs = require('fs');

class BlockchainAPIClient {
    constructor() {
        this.client = axios.create({
            baseURL: config.blockchainApiUrl,
            headers: {
                'x-api-key': config.apiKey,
                'Content-Type': 'application/json'
            }
        });
    }

    /**
     * Create a new blockchain account
     * @param {Object} accountData - The account data
     * @param {string} accountData.username - The username for the account
     * @param {string} accountData.accountUserType - The type of user (e.g., "Admin")
     * @param {string} accountData.userId - The user ID
     * @returns {Promise<Object>} The created account details
     */
    async createAccount(accountData) {
        try {
            const token = 'JWT_Token';
            
            const response = await this.client.post(
                '/api/account/',
                accountData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to create account');
        } catch (error) {
            console.error('Error creating account:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    // Example method - to be implemented based on your API endpoints
    async getBlockchainInfo() {
        try {
            const response = await this.client.get('/info');
            return response.data;
        } catch (error) {
            console.error('Error fetching blockchain info:', error.message);
            throw error;
        }
    }

    /**
     * Get account details by username
     * @param {string} username - The username to search for
     * @returns {Promise<Object>} The account details
     */
    async getAccountByUsername(username) {
        try {
            const token = 'JWtToken';
            const response = await this.client.get(
                '/api/account/username',
                {
                    params: { username },
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to get account');
        } catch (error) {
            console.error('Error fetching account:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    /**
     * Compile and create artifact by uploading a Solidity file
     * @param {string} username - The username
     * @param {string} filePath - The path to the Solidity file
     * @returns {Promise<Object>} The response from the API
     */
    async compileAndCreateArtifact(username, filePath) {
        try {
            const token = 'JWTToken';
            const form = new FormData();
            form.append('username', username);
            form.append('file', fs.createReadStream(filePath));

            const response = await this.client.post(
                '/api/artifact/compileAndCreateArtifact',
                form,
                {
                    headers: {
                        ...form.getHeaders(),
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey
                    },
                    maxBodyLength: Infinity // for large files
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to compile and create artifact');
        } catch (error) {
            console.error('Error compiling and creating artifact:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    /**
     * Deploy a contract
     * @param {Object} deployData - The deployment data (userAddress, artifactId, contractName, contractArgs)
     * @returns {Promise<Object>} The response from the API
     */
    async deployContract(deployData) {
        try {
            const token = 'JWTToken';
            const response = await this.client.post(
                '/api/contract/deploy/',
                deployData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to deploy contract');
        } catch (error) {
            console.error('Error deploying contract:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    /**
     * Call a contract function (write operation)
     * @param {Object} callData - The function call data (userAddress, contractName, functionArgs, functionName)
     * @returns {Promise<Object>} The response from the API
     */
    async writeContractCall(callData) {
        try {
            const token = 'JWTToken';
            const response = await this.client.post(
                '/api/contract/setFunctionValue',
                callData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to call contract function');
        } catch (error) {
            console.error('Error calling contract function:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    /**
     * Read (query) a contract function
     * @param {Object} params - The query params (contractName, functionName, funcParams)
     * @returns {Promise<Object>} The response from the API
     */
    async readContractCall(params) {
        try {
            const token = 'JWTToken';
            const response = await this.client.get(
                '/api/contract/query',
                {
                    params,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to read contract function');
        } catch (error) {
            console.error('Error reading contract function:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    /**
     * Get contract events (by contractName or contractAddress/eventName)
     * @param {Object} params - The query params (contractName or contractAddress/eventName)
     * @returns {Promise<Object>} The response from the API
     */
    async getEvents(params) {
        try {
            const token = 'JWTToken';
            const response = await this.client.get(
                '/api/contract/getEvents',
                {
                    params,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to get events');
        } catch (error) {
            console.error('Error getting events:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }

    /**
     * Create an artifact
     * @param {Object} artifactData - The artifact data (userAddress, artifactName, abi, bytecode, etc.)
     * @returns {Promise<Object>} The response from the API
     */
    async createArtifact(artifactData) {
        try {
            const token = 'JWTToken';
            const response = await this.client.post(
                '/api/artifact',
                artifactData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'x-api-key': config.apiKey,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 200) {
                return response.data.data;
            }
            throw new Error(response.data.message || 'Failed to create artifact');
        } catch (error) {
            console.error('Error creating artifact:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            throw error;
        }
    }
}

// Example usage
async function main() {
    try {
        const client = new BlockchainAPIClient();
        
        // Example: Create an admin account
        const account = await client.createAccount(
            'Test-Admin',
            'Admin',
            '68218a466fe21072bddef50a'
        );
        console.log('Created Account:', account);
    } catch (error) {
        console.error('Error in main:', error.message);
    }
}

// Only run if this file is being run directly
if (require.main === module) {
    main();
}

module.exports = BlockchainAPIClient; 