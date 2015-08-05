import { Navigation } from 'react-router'
import { Store, toImmutable } from 'nuclear-js'
import { CREATE_MEAL, MEAL_CREATED } from '../actionTypes'

export default Store({
	getInitialState() {
		return toImmutable({
			creating: false,
			meal: null
		})
	},

	initialize() {
		this.on(CREATE_MEAL, createMeal)
		this.on(MEAL_CREATED, mealCreated)
	}
})

function createMeal(state, meal) {
	return state.set('creating', true)
}

function mealCreated(state, meal) {
	
	return state.set('meal', meal).set('creating', false)
}