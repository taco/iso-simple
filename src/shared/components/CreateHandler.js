import React from 'react'
import LinkedStateMixin from 'react/lib/LinkedStateMixin'
import { Link, Navigation } from 'react-router'
import Header from './header'
import { ReactMixin } from '../../flux/reactor'
import { createMeal } from '../../flux/actions'
import { nav as navGetter } from '../../flux/getters'

export default React.createClass({  
	mixins: [ReactMixin, LinkedStateMixin, Navigation],

	getInitialState() {
		return {
			name: 'meal',
			description: 'desc',
			rating: 0,
			price: 0,
			min: 0
		}
	},

	getDataBindings() {
		return {
			nav: navGetter
		}
	},

	handleClickCreate() {
		createMeal({
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			min: this.state.min,
			rating: this.state.rating
		}).then(() => this.transitionTo('/list'))
	},

	render() {
		var saveButton

		if (this.state.nav.get('creating')) {
			saveButton = <button disabled>Saving meal...</button>
		} else {
			saveButton = <button onClick={this.handleClickCreate}>Create Meal</button>
		}

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

				{ saveButton }
			</div>
		)
	}
})