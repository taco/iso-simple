import { Client } from 'node-rest-client'

const client = new Client();

export default {
	ListMeal
}

function ListMeal(cb) {
	client.get('http://localhost:3001/meals', function(data) {
		setTimeout(() => cb(data), 0)
	})
}