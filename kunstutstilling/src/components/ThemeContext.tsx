import React, {useState, createContext, useLayoutEffect} from 'react'

const ThemeContext = createContext({
    dark: false,
    toggle: ()=>{}
})

export default ThemeContext 

export function ThemeProvider (props:any) {

    const [dark, setDark] = useState(localStorage.getItem('darkTheme') === 'true')
    const [initial, setInitial]  = useState(sessionStorage.getItem('visited') !== 'true')

    useLayoutEffect(()=> {
        const lastTheme = localStorage.getItem('darkTheme');
        //console.log('localstorage.getItem("darkTheme"): ', lastTheme)
        if(!initial){
            if(lastTheme === 'true') {
                //console.log("Skiftet til darkTheme")
                setDark(true);
                applyTheme(darkTheme);  
            }
            
            if(!lastTheme || lastTheme === 'false'){
                //console.log("Skiftet til lightTheme")
                setDark(false)
                applyTheme(lightTheme)
            }
        } else {
            setInitial(false)
        }
    }, [dark])

    function applyTheme(theme: Array<string>){
        const root = document.getElementsByTagName('html')[0]
        root.style.cssText = theme.join(';')
    }

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
    '--text: #30475e',
    '--boxBackground: #f7f7f7',
]

const darkTheme : Array<string> = [
    '--background: #30475e',
    '--text: #f7f7f7',
    '--boxBackground: #30475e',
    
]
