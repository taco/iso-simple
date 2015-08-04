import { Store, toImmutable } from 'nuclear-js'
import { RECEIVE_MEALS, CREATE_MEAL, MEAL_CREATED } from '../actionTypes'
import reactor from '../reactor'
import api from '../../shared/api'

export default Store({
	getInitialState() {
		return toImmutable({})
	},

	initialize() {
		this.on(RECEIVE_MEALS, receiveMeals)
		this.on(CREATE_MEAL, createMeal)
	}
})

function receiveMeals(state, { meals }) {
	var newMeals = toImmutable(meals)
		.toMap()
		.mapKeys((k, v) => v.get('id'))
	return newMeals
}

function createMeal(state, meal) {
	api.createMeal(meal)
		.then(meal => reactor.dispatch(MEAL_CREATED, meal))

	return state
}