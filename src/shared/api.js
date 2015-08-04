import { Client } from 'node-rest-client'

const client = new Client()


const HOST = 'http://localhost:3000/api'


export default {
	getMeals(cb) {
		client.get(`${ HOST }/meals`, function(data, stuff) {
			var parse = JSON.parse(data.toString('utf-8'))
			cb(parse.items)
		})
	}
}