import React from "react";
import "./Wrapper.css";

const Wrapper = props => {
	return (
		<main className="container">
			<div className="row">
			  	{props.children}
			</div>
		</main>
	)
}

export default Wrapper;
