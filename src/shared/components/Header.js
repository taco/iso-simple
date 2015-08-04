import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

	render() {
		return (
			<div>
				<h1>Meal Browser</h1>
				<Link to="/">Home</Link>
				<Link to="/list">List</Link>
				<Link to="/create">Create</Link>
			</div>
		)
	}
})