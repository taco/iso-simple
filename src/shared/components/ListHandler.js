import React from 'react'
import Header from './header'
import reactor from '../../flux/reactor'
import actions from '../../flux/actions'
import getters from '../../flux/getters'



export default React.createClass({  
  mixins: [reactor.ReactMixin],

  componentWillMount() {
    actions.fetchMeals()
  },

  getDataBindings() {
  	return {
  		meals: getters.meals
  	}
  },

  render() {
    return (

    	<div>
        <Header />
        <div>
      		<h2>Meals</h2>
      		{
            this.state.meals.toArray().map(meal => {
              return (
                <div key={ meal.get('id') }>
                  { meal.get('name') }
                </div>
              )
            })
          }
        </div>
    	</div>
    )
  }
})