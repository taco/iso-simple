import { Client } from 'node-rest-client'

const client = new Client();

export default {
	ListMeal,
	CreateMeal
}

function ListMeal() {
	return new Promise((fulfill, reject) => {
		client.get('http://localhost:3001/meals', data => fulfill(data))
	})
}

function CreateMeal(payload) {
	var args = {
		data: payload,
		headers: {'Content-Type': 'application/json'} 
	}
	return new Promise((fulfill, reject) => {
		client.post('http://localhost:3001/meals', args, data => {
			fulfill(JSON.parse(data.toString('utf-8')))
		})
	})
}