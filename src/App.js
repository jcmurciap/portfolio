import React from 'react'
import './styles.css';
import { AboutMe } from './AboutMe';
import { ContactMe } from './ContactMe';
import { DarkMode } from './DarkMode';
import { Footer } from './Footer';
import { Header } from './Header';
import { Projects } from './Projects';

export const App = () => {
    return (
        <>
            <DarkMode />
            <div className='container'>
                <Header className="header"/>
                <AboutMe className="about"/>
                <ContactMe className="contact"/>
                <Projects className="projects"/>
                <Footer className="footer"/>
            </div>
        </>
    );
};