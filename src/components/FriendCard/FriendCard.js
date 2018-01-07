import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

	<div className="col s6 m4 l3" id={props.id} datac={props.datac}>
		<div onClick={() => props.update(props.id)} className="card hoverable">
            <div className="card-image">
              <img className='images' alt={props.name} src={props.image}/>
            </div>
        </div>
    </div> 
);

export default FriendCard;
   