import api from '../shared/api'
import reactor from './reactor'
import {
    RECEIVE_MEALS,
} from './actionTypes'

export default {
	fetchMeals() {

		api.getMeals(meals => {
			console.log('meals',{ meals })
			reactor.dispatch(RECEIVE_MEALS, { meals })
		})
	}
}