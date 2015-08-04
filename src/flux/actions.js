import api from '../shared/api'
import reactor from './reactor'
import { RECEIVE_MEALS, LOAD_INCREMENT, LOAD_DECREMENT, CREATE_MEAL } from './actionTypes'

export default {
	fetchMeals,
	loadIncrement,
	loadDecrement,
	createMeal
}

function fetchMeals() {
	return new Promise((fulfill, reject) => {
		loadIncrement()
		api.getMeals()
			.then(meals => {
				reactor.dispatch(RECEIVE_MEALS, { meals })
				loadDecrement()
				fulfill()
			})
	})
}

function createMeal(meal) {
	reactor.dispatch(CREATE_MEAL, meal)
}

function loadIncrement() {
	reactor.dispatch(LOAD_INCREMENT, 1)
}

function loadDecrement() {
	reactor.dispatch(LOAD_DECREMENT, 1)
}