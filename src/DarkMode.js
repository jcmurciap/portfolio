import React, { useEffect } from 'react'


export const DarkMode = () => {
    
    let chk = document.getElementById('chk');
    
    const handleToggler = () => {
        chk.addEventListener('change', () => {
            document.body.classList.toggle('dark');
        });        
    }

    useEffect(() => {
        chk = document.getElementById('chk');
    },);

    return (
        <div className="dark-mode-toggler" onClick={handleToggler}>
            <input className="checkbox" type="checkbox" id="chk" />
            <label className="label" htmlFor="chk">
                <div className="ball"></div>
            </label>
        </div>
    );
};
