import express from 'express';
import React from 'react';
import Router from 'react-router'
import { ListMeal, CreateMeal } from './api'
import reactor from '../flux/reactor'
import { load as loadGetter } from '../flux/getters'
import bodyParser from 'body-parser'
import routes from '../shared/routes'

const app = express();


app.set('views', './views')
app.set('view engine', 'jade')

//app.use(bodyParser.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({exntended: true}))


app.get('/api/meals', (req, res) => {
	ListMeal().then(data => res.json(data));
});

app.post('/api/meals', (req, res) => {
	CreateMeal(req.body).then(data => res.json(data));
});

app.get('/*', function(req, res) {

	Router.run(routes, req.url, Handler => {

		var content = React.renderToString( < Handler / > );
		
		function go() {
			content = React.renderToString( < Handler / > );

			res.render('index', {
				content: content
			});
		}
		var interval = setInterval(() => {
			if (reactor.evaluate(loadGetter) !== 0) {
				return
			}
			clearInterval(interval)
			go()
			
		}, 1)
	});
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});