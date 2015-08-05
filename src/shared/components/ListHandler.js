import React from 'react'
import Header from './header'
import { ReactMixin as ReactorMixin } from '../../flux/reactor'
import { fetchMeals } from '../../flux/actions'
import { meals as mealGetter } from '../../flux/getters'



export default React.createClass({  
  mixins: [ReactorMixin],

  getDataBindings() {
    return {
      meals: mealGetter
    }
  },

  componentWillMount() {
    if (!this.state.meals.size) {
      fetchMeals()
    }
  },  

  render() {
    return (

    	<div>
        <Header />
    		<h2>Meals</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Minimum</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
      		{
            this.state.meals.toArray().map(meal => {
              return (
                <tr key={ meal.get('id') }>
                  <td>{ meal.get('name') }</td>
                  <td>{ meal.get('rating') }</td>
                  <td>{ meal.get('price') }</td>
                  <td>{ meal.get('min') }</td>
                  <td>{ meal.get('description') } </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
    	</div>
    )
  }
})