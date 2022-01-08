import React from 'react'
import './styles.css';
import { AboutMe } from './AboutMe';
import { ContactMe } from './ContactMe';
import { DarkMode } from './DarkMode';
import { Header } from './Header';
import { Projects } from './Projects';

export const App = () => {
    return (
        <>
            <DarkMode />
            <div className='container'>
                <Header />
                <AboutMe />
                <ContactMe />
                <Projects />
            </div> 
        </>
    );
};