import React from 'react'
import { Map } from 'immutable'
import reactor from '../../flux/reactor'
import actions from '../../flux/actions'
import getters from '../../flux/getters'



actions.fetchMeals();

export default React.createClass({  
  mixins: [reactor.ReactMixin],

  getDataBindings() {
  	return {
  		meals: getters.meals
  	}
  },

  render() {

    return (
    	<div>
    		Meals?
    		{
          this.state.meals.toArray().map(meal => {
            var key = 'meal-' + meal.get('id')
            return (
              <div key={ key }>
                { meal.get('name') }
              </div>
            )
          })
        }
    	</div>
    );
  }
})