import React from 'react'
import image from './images/profile.jpg'

export const Header = () => {
    return (
        <div className='header'>
            <div className='box'>
                <h1 className='title'>Camilo Murcia</h1>
                <h2 className='profession'>Software & Industrial Engineer in Colombia</h2>
            </div>
            <img className='image' src={image} alt="developer photo" width="200" height="200"/>
        </div>
    );
};
