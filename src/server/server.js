import express from "express";
import React from "react";
import Router from "react-router"
import { ListMeal } from "./api"
import reactor from '../flux/reactor'
import { load as loadGetter } from '../flux/getters'
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

import routes from "../shared/routes";

app.get('/api/meals', function(req, res) {
	ListMeal(function(data) {
		res.json(data)
	});
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