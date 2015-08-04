import { Store, toImmutable } from 'nuclear-js'
import { RECEIVE_MEALS } from '../actionTypes'

export default Store({
	getInitialState() {
			return toImmutable({})
		},

		initialize() {
			this.on(RECEIVE_MEALS, receiveMeals)
		}
})


function receiveMeals(state, { meals }) {
	let newMeals = toImmutable(meals)
		.toMap()
		.mapKeys((k, v) => v.get('id'))
	return newMeals
}