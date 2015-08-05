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
			.then(meals => {
				reactor.dispatch(RECEIVE_MEALS, { meals })
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

function mealCreated(meal) {
	reactor.dispatch(MEAL_CREATED, meal)
	if (mealPromise && mealPromise.fulfill) {
		mealPromise.fulfill(meal)
	}
}

function loadIncrement() {
	reactor.dispatch(LOAD_INCREMENT, 1)
}

function loadDecrement() {
	reactor.dispatch(LOAD_DECREMENT, 1)
}