let WebSocket = require('ws');

let wss = new WebSocket.Server({ port:process.env.PORT || 8080 });

wss.on('connection', (ws) => {
	ws.on('message',(message) => {
		console.log(`${message}`);
	});

	setTimeout(() => {
		ws.send('hello');
	}, 2000);
})