import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

/**
 * Component for button to change theme of application
 */
export default function ThemeButton() {
    const {dark, toggle} = useContext(ThemeContext)
    
    return (
        <button className="SettingsButton" onClick={toggle}>    
            Toggle theme        
        </button>
    )
}
