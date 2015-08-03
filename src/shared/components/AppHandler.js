/** @jsx */
import React from "react";
import { Link } from "react-router";

export default class AppHandler extends React.Component {  
  render() {
    return <div>
	    	Hello App Handler

	    	<Link to="/list">Go to list</Link>

	    	<Link to="/create">Go to create</Link>
    	</div>;
  }
}