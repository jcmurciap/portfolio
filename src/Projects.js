import React from 'react'
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import css from './images/css.png';
import git from './images/git.png';
import html from './images/html.png';
import js from './images/js.png';
import ts from './images/ts.png';
import react from './images/react.png';




export const Projects = () => {
    return (
        <>
            <div className='container-projects'>
                <h1 className='description-title'>Projects</h1>
                <div className='projects'>
                    <div className='project'>
                        <img className='project-image' src={project1} alt="development project" width={200} height={200}/>
                        <h4 className='project-title'>Project title</h4>
                        <aside>
                            <small className='project-title'>Tools used</small>
                            <div className='tools'>
                                <img src={js} alt="javascript logo" width={30} height={30} />
                                <img src={ts} alt="typescript logo" width={30} height={30} />
                                <img src={html} alt="html logo" width={30} height={30} />
                                <img src={css} alt="css logo" width={30} height={30} />
                                <img src={git} alt="git logo" width={40} height={30} />
                                <img src={react} alt="react logo" width={100} height={30} />
                            </div>
                        </aside>
                    </div>
                    <div className='project'>
                        <img className='project-image' src={project2} alt="development project" width={200} height={200}/>
                        <h4 className='project-title'>Project title</h4>
                        <aside>
                            <small className='project-title'>Tools used</small>
                            <div className='tools'>
                                <img src={js} alt="javascript logo" width={30} height={30} />
                                <img src={ts} alt="typescript logo" width={30} height={30} />
                                <img src={html} alt="html logo" width={30} height={30} />
                                <img src={css} alt="css logo" width={30} height={30} />
                                <img src={git} alt="git logo" width={40} height={30} />
                                <img src={react} alt="react logo" width={100} height={30} />
                            </div>
                        </aside>
                    </div>
                    <div className='project'>
                        <img className='project-image' src={project3} alt="development project" width={200} height={200}/>
                        <h4 className='project-title'>Project title</h4>
                        <aside>
                            <small className='project-title'>Tools used</small>
                            <div className='tools'>
                                <img src={js} alt="javascript logo" width={30} height={30} />
                                <img src={ts} alt="typescript logo" width={30} height={30} />
                                <img src={html} alt="html logo" width={30} height={30} />
                                <img src={css} alt="css logo" width={30} height={30} />
                                <img src={git} alt="git logo" width={40} height={30} />
                                <img src={react} alt="react logo" width={100} height={30} />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};
