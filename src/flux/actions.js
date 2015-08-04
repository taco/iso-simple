import api from '../shared/api'
import reactor from './reactor'
import { RECEIVE_MEALS, LOAD_INCREMENT, LOAD_DECREMENT } from './actionTypes'

export default {
	fetchMeals,
	loadIncrement,
	loadDecrement
}

function fetchMeals() {
	loadIncrement()
	api.getMeals(meals => {
		reactor.dispatch(RECEIVE_MEALS, { meals })
		loadDecrement()
	})
}

function loadIncrement() {
	reactor.dispatch(LOAD_INCREMENT, 1)
}

function loadDecrement() {
	reactor.dispatch(LOAD_DECREMENT, 1)
}