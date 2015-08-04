import { Store, toImmutable } from 'nuclear-js'
import { LOAD_INCREMENT, LOAD_DECREMENT } from '../actionTypes'

export default Store({
	getInitialState() {
		return 0
	},

	initialize() {
		this.on(LOAD_INCREMENT, loadIncrement)
		this.on(LOAD_DECREMENT, loadDecrement)
	}
})

function loadIncrement(state, amount) {
	return state + amount
}

function loadDecrement(state, amount) {
	return state - amount
}