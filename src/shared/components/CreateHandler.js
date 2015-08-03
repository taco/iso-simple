/** @jsx */
import React from "react";
import { Link } from "react-router";

export default class CreateHandler extends React.Component {  
  render() {
    return <div>
	    	Create Handler 

	    	<Link to="/create">Create</Link>
    	</div>;
  }
}