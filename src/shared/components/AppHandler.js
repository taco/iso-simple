import React from 'react'
import Header from './header'

export default class AppHandler extends React.Component {  
	render() {
		return (
			<div>
				<Header />
				<h2>Welcome!</h2>
			</div>
		)
	}
}