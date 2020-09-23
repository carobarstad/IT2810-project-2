import React, { useState, useEffect } from 'react';

export default function Toggle() {
    const [theme, setTheme] = useState('light');

    function toggleTheme(){
      if(theme === 'light'){
        setTheme('dark');
        localStorage.setItem('darkmode', 'true')
      } else {
        setTheme('light');
        localStorage.removeItem('darkmode')
      }
      document.getElementById('colorPallette')!.className = theme + 'Mode';
      console.log(theme+'Mode')
    }

    useEffect( () =>{
      if(localStorage.getItem('darkmode')){
        toggleTheme()
      }
    }, [])
    
    return (
        <div className='SettingsBox'>
      <>
        <button className='button' onClick={()=>toggleTheme()}>Toggle theme</button>
        <h1>{theme}</h1>
        <footer>
        </footer>
      </>

        </div>
    )
}
