import { Client } from 'node-rest-client'

const client = new Client();


const HOST = 'http://localhost:3001'


export default {
	getMeals(cb) {
		client.get('http://localhost:3000/api/meals', function(data, stuff) {
			var parse = JSON.parse(data.toString('utf-8'));
			cb(parse.items)
		})
	}
}