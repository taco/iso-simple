import { Client } from 'node-rest-client'

const client = new Client()


const HOST = 'http://localhost:3000/api'


export default {
	getMeals() {
		return new Promise((fulfill, reject) => {
			client.get(`${ HOST }/meals`, data => {
				var parse = JSON.parse(data.toString('utf-8'))
				fulfill(parse.items)
			})
		})
	},

	createMeal(meal) {
		var args = {
			data: meal,
			headers: {'Content-Type': 'application/json'} 
		}
		return new Promise((fulfill, reject) => {
			client.post(`${ HOST }/meals`, args, data => {
				var parse = JSON.parse(data.toString('utf-8'))
				setTimeout(() => fulfill(parse.meal), 5000)
			})
		})
	}
}