import { Reactor } from 'nuclear-js'
import MealStore from './stores/MealStore'

const reactor = new Reactor({
	debug: true
})

reactor.registerStores({
  'meals': MealStore
})

export default reactor