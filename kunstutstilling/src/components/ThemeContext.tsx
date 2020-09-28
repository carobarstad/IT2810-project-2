import React, {useState, createContext, useLayoutEffect} from 'react'

const ThemeContext = createContext({
    dark: false,
    toggle: ()=>{}
})

/**
 * Context and provider that is responsible for the toggling of the application's theme
 */
export default ThemeContext 

export function ThemeProvider (props:any) {

    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('darkTheme')!))

    /**
     * Function that calls on applyTheme before render
     */
    useLayoutEffect(()=> {
        const lastTheme = localStorage.getItem('darkTheme');
            
        if(lastTheme === 'true') {
            setDark(true);
            applyTheme(darkTheme);  
        }
        
        if(!lastTheme || lastTheme === 'false'){
            setDark(false)
            applyTheme(lightTheme)
        }
    }, [dark])

    /**
     * Function that updates the css-variables with the input-array
     * @param theme: Array of strings with css-variables
     */
    function applyTheme(theme: Array<string>){
        const root = document.getElementsByTagName('html')[0]
        root.style.cssText = theme.join(';')
    }

    /**
     * Function that toggles the dark-variable and saves this in the local storage
     */
    const toggle = () => {
        setDark(!dark)
        localStorage.setItem('darkTheme', dark ? 'false' : 'true')
    }

    return <ThemeContext.Provider value={({
        dark, 
        toggle,
    })}> 
        {props.children}
    </ThemeContext.Provider>
} 


//Styles

const lightTheme : Array<string> = [
    '--background: #f7f7f7',
    '--wrapperBackground: #f3f3f3',
    '--text: #30475e',
    '--boxColor: #fff',
    '--buttonColor: #f7f7f7',
    '--buttonHover: #f0f0f0',
    '--boxShadowColor: rgba(0, 64, 128, 0.2)',
]

const darkTheme : Array<string> = [
    '--background: #252525',
    '--wrapperBackground: #858585',
    '--text: #d6d6d6',
    '--boxColor: #303030',
    '--buttonColor: #454545',
    '--buttonHover: #535353',
    '--boxShadowColor: rgba(30, 30, 30, 1)',
]
