import api from '../shared/api'
import reactor from './reactor'
import { RECEIVE_MEALS, LOAD_INCREMENT, LOAD_DECREMENT, CREATE_MEAL, MEAL_CREATED } from './actionTypes'

export default {
	fetchMeals,
	loadIncrement,
	loadDecrement,
	createMeal,
	mealCreated
}

function fetchMeals() {
	return new Promise((fulfill, reject) => {
		loadIncrement()
		api.getMeals()
			.then(items => {
				reactor.dispatch(RECEIVE_MEALS, { items })
				loadDecrement()
				fulfill()
			})
	})
}

var mealPromise

function createMeal(meal) {
	return new Promise((fulfill, reject) => {
		reactor.dispatch(CREATE_MEAL, meal)
		mealPromise = { fulfill, reject }
	})
}

function mealCreated(data) {
	reactor.dispatch(MEAL_CREATED, data)
	if (mealPromise && mealPromise.fulfill) {
		mealPromise.fulfill(data)
	}
}

function loadIncrement() {
	reactor.dispatch(LOAD_INCREMENT, 1)
}

function loadDecrement() {
	reactor.dispatch(LOAD_DECREMENT, 1)
}