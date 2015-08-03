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
	console.log('receiveMeals')
	let newMeals = toImmutable(meals)
		.toMap()
		.mapKeys((k, v) => v.get('id'))
	return state.merge(newMeals)
}