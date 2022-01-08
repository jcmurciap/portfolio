import React from 'react'
import github from './images/github-logo.png';
import gmail from './images/gmail-logo.jpg';
import linkedin from './images/linkedin.png';
import twitter from './images/logo-twitter.png';

export const ContactMe = () => {
    return (
        <div>
            <h1 className='description-title'>Contact me</h1>
            <div className='logos'>
                <img className='logo' src={github} alt="github logo" width="70" height="70"/>
                <img className='logo' src={linkedin} alt="linkedin logo" width="70" height="70"/>
                <img className='logo' src={gmail} alt="gmail logo" width="70" height="70"/>
                <img className='logo' src={twitter} alt="twitter logo" width="70" height="70"/>
            </div>
        </div>
    );
};
