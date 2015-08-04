import { Store, toImmutable } from 'nuclear-js'
import { MEAL_CREATED } from '../actionTypes'

export default Store({
	getInitialState() {
		return toImmutable({})
	},

	initialize() {
		this.on(MEAL_CREATED, mealCreated)
	}
})

function mealCreated(state, meal) {
	state.setIn(['updated', meal])
}