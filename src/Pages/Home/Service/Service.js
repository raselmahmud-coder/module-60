import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const { name, description, price, img } = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1> {name}</h1>
            <p>Price {price}</p>
            <p>{description}</p>
            <button className='btn btn-primary'>Book {name}</button>
        </div>
    );
};

export default Service;