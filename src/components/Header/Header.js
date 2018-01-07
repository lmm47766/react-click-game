import React from "react";
import "./Header.css";

const Header = props => {

	return (
		<div className="title col s12 m4 l3">
			<img className='logo' alt='logo'src='https://news.marvel.com/wp-content/uploads/2017/06/d23_post_master-960x540.jpg'/>
			<h2>Clicky Game</h2>
			<h4>Click on an image to earn points, but don't click on any more than once!</h4> 
		</div>
	)

};

export default Header;
