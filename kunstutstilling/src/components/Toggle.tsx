import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';

export default function Toggle() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
        localStorage.setItem('darkmode', 'true')
      } else {
        setTheme('light');
        localStorage.removeItem('darkmode')
      }
    }

    useEffect(()=>{
      if(localStorage.getItem('darkmode')){
        setTheme('dark')
      }
    }, [])
    
    return (
        <div className='SettingsBox'>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>Toggle theme</button>
        <h1>It's a toggle theme!:)</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
        </div>
    )
}
