const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
        // Handle incoming messages
    });

    // Send updates to the client
    const sendUpdate = (update) => {
        ws.send(JSON.stringify(update));
    };

    // Example: Send a status update every 5 seconds
    setInterval(() => {
        sendUpdate({ status: 'Running', timeRunning: '5s' });
    }, 5000);
});

console.log('WebSocket server is running on ws://localhost:8080');
