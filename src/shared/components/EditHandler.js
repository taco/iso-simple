/** @jsx */
import React from "react";
import { Link } from "react-router";

export default class EditHandler extends React.Component {  
  render() {
    return <div>
	    	Edit Handler 

	    	<Link to="/list">List</Link>
    	</div>;
  }
}