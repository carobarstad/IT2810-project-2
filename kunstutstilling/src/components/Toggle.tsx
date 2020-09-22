import React, { useState } from 'react';
import { lightTheme, darkTheme } from '../theme';

export default function Toggle() {
    const [theme, setTheme] = useState('light');

    function handleClick(){
      if(theme === 'light'){
        setTheme('dark');
      } else {
        setTheme('light');
      }
      document.getElementById('colorPallette')!.className = theme + 'Mode';
      console.log(theme+'Mode')
    }

    return (
        <div className='SettingsBox'>
      <>
        <button className='button' onClick={()=>handleClick()}>Toggle theme</button>
        <h1>{theme}</h1>
        <footer>
        </footer>
      </>

        </div>
    )
}
