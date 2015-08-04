/** @jsx */
import React from "react";
import { Link } from "react-router";
import Header from './header'

export default class CreateHandler extends React.Component {  
	render() {
		return (
			<div>
				<Header />
				<h2>Create</h2>
			</div>
		)
	}
}