import assert from 'assert'
import { Reactor } from 'nuclear-js'
import { RECEIVE_MEALS } from '../../../src/flux/actionTypes'
import getters from '../../../src/flux/getters'
import MealStore from '../../../src/flux/stores/MealStore'



beforeEach(function() {
	this.reactor = new Reactor({
		debug: true
	})

	this.reactor.registerStores({
	  'meals': MealStore
	})

	this.reactor.dispatch(RECEIVE_MEALS, {
		meals: [{
			id: 1,
			name: 'meal1'
		}, {
			id: 2,
			name: 'meal2'
		}]
	})
})

describe('Meal store', () => {

	it('has meals 2', function() {
		var meals = this.reactor.evaluate(getters.meals)
		assert.equal(2, meals.count())
	})

})