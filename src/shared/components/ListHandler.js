import React from "react";
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
    			this.state.meals.map(function(m) {
    			var meal = m.toJS()
    			return (
    				<div>
    					{meal.id} - {meal.name}
    				</div>
    			);
    		})}
    	</div>
    );
  }
})