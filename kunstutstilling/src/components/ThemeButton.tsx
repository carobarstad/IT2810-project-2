import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

export default function ThemeButton() {
    const {dark, toggle} = useContext(ThemeContext)
    
    return (
        <button className="SettingsButton" onClick={toggle}>    
            Toggle theme        
        </button>
    )
}
