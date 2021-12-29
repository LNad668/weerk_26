import './Cart.css';
import React from 'react'

function Card({url, name, info, superpower}) {
    return (
        <div className="card">
            <img src={url}></img>
            <div className='name_hero'>{name}</div>
            <div className='information_hero'>{info}</div> 
            <div className='superpower'>{superpower}</div>
        </div>
    );
}

export default Card;