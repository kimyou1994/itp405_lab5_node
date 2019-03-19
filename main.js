//let connection = new WebSocket('ws://localhost:8080');
let connection = new WebSocket('ws://kimyou1994-itp405-lab5-node.herokuapp.com');
connection.onopen = () => {
	console.log('connected from the frontend');
}

connection.onerror = () => {
	console.log('failed to connect from frontend');
}

connection.onmessage = (event) => {
	console.log('message received', event.data );
}

document.getElementById('text').addEventListener('input', (event) => {
	event.preventDefault();

	let message = document.getElementById('text').innerHTML;
	connection.send(message);
})