import React from 'react'
import LinkedStateMixin from 'react/lib/LinkedStateMixin'
import { Link } from 'react-router'
import Header from './header'
import { createMeal } from '../../flux/actions'

export default React.createClass({  
	mixins: [LinkedStateMixin],

	getInitialState() {
		return {
			name: 'meal',
			description: 'desc',
			rating: 0,
			price: 0,
			min: 0
		}
	},

	handleClickCreate() {
		createMeal(this.state)
	},

	render() {
		return (
			<div>
				<Header />
				<div>
					<span>Name: </span>
					<input type="text" valueLink={this.linkState('name')}  required />
				</div>

				<div>
					<span>Description: </span>
					<input type="text" valueLink={this.linkState('description')} required />
				</div>

				<div>
					<span>Price per person: </span>
					<input type="number" min="0" valueLink={this.linkState('price')} required />
				</div>

				<div>
					<span>Minumum order: </span>
					<input type="number" min="0" valueLink={this.linkState('min')} required />
				</div>

				<div>
					<span>Rating: </span>
					<input type="number" min="0" max="5" valueLink={this.linkState('rating')} required />
				</div>

				<button onClick={this.handleClickCreate}>Create Meal</button>
			</div>
		)
	}
})