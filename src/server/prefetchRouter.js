import React from 'react'
import ListHandler from '../shared/components/ListHandler'
import Router from 'react-router'
import { fetchMeals } from '../flux/actions'


export default {
	run
}

const prefetch = {
	'/list': () => {
		return fetchMeals()
	}
}

function run(routes, req, res) {

	if (prefetch[req.url]) {
		prefetch[req.url]()
			.then(() => {
				return buildResponse(routes, req)
			})
			.then((content) => {
				res.render('index', {
					content: content
				})
			})

		return;
	}

	buildResponse(routes, req)
		.then(content => {
			res.render('index', {
				content: content
			})
		})
}

function buildResponse(routes, req) {
	return new Promise((fulfill, reject) => {
		Router.run(routes, req.url, Handler => {
			fulfill(React.renderToString( < Handler / >))
		})
	})
}