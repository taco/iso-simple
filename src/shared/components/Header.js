import React from 'react'
import { Link } from 'react-router'
import reactor from '../../flux/reactor'
import { nav as navGetter } from '../../flux/getters'

export default React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings() {
		return {
			nav: navGetter
		}
	},

	render() {

		var activeMeal = <span>nothing</span>

		if (this.state.nav.get('creating')) {
			activeMeal = <span>TRYING TO SAVE THIS BITCH!</span>
		} else if (this.state.nav.get('meal')) {
			let meal = this.state.nav.get('meal')
			activeMeal = <span>Last update: {meal.name}</span>
		}

		return (
			<div>
				<h1>Meal Browser</h1>
				<Link to="/">Home</Link> - 
				<Link to="/list">List</Link> - 
				<Link to="/create">Create</Link> - 
				{activeMeal}
			</div>
		)
	}
})