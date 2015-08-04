import { Reactor } from 'nuclear-js'
import MealStore from './stores/MealStore'
import LoadStore from './stores/LoadStore'

const reactor = new Reactor({
	debug: true
})

reactor.registerStores({
  'meals': MealStore,
  'load': LoadStore
})

export default reactor