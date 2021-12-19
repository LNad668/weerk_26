import './Cart.css';
import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <img src={props.url}></img>
            <div className='name_hero'>{props.name}</div>
            <div className='information_hero'>{props.info}</div> 
<div className='superpower'>{props.superpower}</div>
</div>
    );
}

export default Card;