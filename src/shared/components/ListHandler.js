import React from "react";
import reactor from '../../flux/reactor'
import actions from '../../flux/actions'
import getters from '../../flux/getters'

console.log('STUFFF', getters)
actions.fetchMeals();
console.log('eval', reactor.evaluate(getters.meals))
console.log('get', getters.meals)
function stuff() {
	
	console.log('eva1', reactor.evaluate(getters.meals))
	console.log('eva2', reactor.evaluate([]))
}

stuff()

setTimeout(stuff, 1000)

export default React.createClass({  
  mixins: [reactor.ReactMixin],

  getDataBindings() {
  	return {
  		meals: getters.meals
  	}
  },

  render() {
  	console.log('props', this.props)
    return (
    	<div>
    		{this.props.meals.map(function(meal) {
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