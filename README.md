# Code Execution Backend

This project is a backend service for executing C code within a Docker sandbox.
Skills and technologies used: Sandboxing code execution, integration with compilers, WebSocket communication.

## Features
- Secure code execution in Docker containers.
- API for submitting C code and receiving output.

## Getting Started

### Prerequisites
- Docker
- Node.js

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/code-execution-backend.git
   cd code-execution-backend
2. Install dependencies:
   npm install
   
### Running Locally
   1.Build and run the Docker container:
      docker build -t code-execution .
      docker run -d -p 7001:7000 -v "C:/Users/Lenovo ThinkPad L560/Desktop/code-execution-backend/src/sandbox:/sandbox" code-execution
   2.Start the backend server:
      node src/app.js
   3.Test the API using Postman:
      Send a POST request to 'http://localhost:7001/main/execute' with the C code in the request body.

### Usage
### API Endpoints
POST /main/execute
Request Body: { "sourceCode": "your C code here" }
Response: { "output": "execution result" }

### CLI Tool
To use the CLI tool for submitting C code:
    'npx code-execution-cli'
    
### Known Issues
Command line tool might face issues due to deployment constraints.

### Contributing
Feel free to submit issues or pull requests.

### License
This project is licensed under the MIT License.

