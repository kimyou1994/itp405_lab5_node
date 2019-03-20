let WebSocket = require('ws');

let wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

wss.on('connection', (ws) => {
	ws.on('message',(message) => {
		wss.clients.forEach((client) => {
			client.send(message)
		});
		//console.log(`${message}`);
	});
})