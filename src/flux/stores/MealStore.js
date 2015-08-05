import { Store, toImmutable } from 'nuclear-js'
import { RECEIVE_MEALS, CREATE_MEAL, MEAL_CREATED } from '../actionTypes'
import actions from '../actions'
import reactor from '../reactor'
import api from '../../shared/api'

export default Store({
	getInitialState() {
		return toImmutable({})
	},

	initialize() {
		this.on(RECEIVE_MEALS, receiveMeals)
		this.on(CREATE_MEAL, createMeal)
		this.on(MEAL_CREATED, mealCreated)
	}
})

function receiveMeals(state, { items }) {
	var newMeals = toImmutable(items)
		.toOrderedMap()
		.mapKeys((k, v) => v.get('id'))
	return newMeals
}

function createMeal(state, meal) {
	api.createMeal(meal)
		.then(data => actions.mealCreated(data))

	return state.clear()
}

function mealCreated(state, { items }) {
	console.log('items', items)
	return receiveMeals(state, { items })
}