import React, { useEffect, useState } from 'react'


export const DarkMode = () => {

    
    const [toggler, setToggler] = useState(document.getElementById('chk'))
    
    const handleToggler = () => {
        toggler.addEventListener('change', () => {
            document.body.classList.toggle('dark');
        });        
    };
    
    useEffect(() => {
        setToggler(document.getElementById('chk'));
    });

    return (
        <div className="dark-mode-toggler" >
            <input className="checkbox" type="checkbox" id="chk" onClick={handleToggler} />
            <label className="label" htmlFor="chk">
                <div className="ball"></div>
            </label>
        </div>
    );
};

