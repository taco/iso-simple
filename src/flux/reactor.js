import { Reactor } from 'nuclear-js'
import MealStore from './stores/MealStore'
import LoadStore from './stores/LoadStore'
import NavStore from './stores/NavStore'

const reactor = new Reactor({
	debug: true
})

reactor.registerStores({
  'meals': MealStore,
  'load': LoadStore,
  'nav': NavStore
})

export default reactor