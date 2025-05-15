# Blockchain API Scripts

This project contains Node.js scripts for interacting with a private blockchain through its API endpoints.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```bash
cp .env.example .env
```

3. Update the `.env` file with your blockchain API configuration:

- `BLOCKCHAIN_API_URL`: Your blockchain API endpoint
- `API_KEY`: Your API key for authentication
- `WEB3_PROVIDER_URL`: (Optional) Web3 provider URL if using Web3.js

## Project Structure

```
.
├── src/
│   ├── index.js         # Main entry point and API client
│   └── config.js        # Configuration management
├── .env                 # Environment variables (create from .env.example)
├── package.json         # Project dependencies and scripts
└── README.md           # This file
```

## Usage

1. Start the application:

```bash
npm start
```

2. To add new API functionality:
   - Add new methods to the `BlockchainAPIClient` class in `src/index.js`
   - Implement error handling and response processing
   - Export the new functionality

## Development

- Use `npm test` to run tests
- The project uses Jest for testing
- Nodemon is available for development with hot-reloading

## Adding New API Endpoints

To add new API endpoints:

1. Add new methods to the `BlockchainAPIClient` class
2. Implement proper error handling
3. Add appropriate documentation
4. Update tests if necessary

Example:

```javascript
async function newEndpoint() {
  try {
    const response = await this.client.post("/new-endpoint", data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
```
