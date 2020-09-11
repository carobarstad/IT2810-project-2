import React from 'react'
import './components.css'
import Header from './Header'
import InfoBox from './InfoBox'
import DisplayBox from './DisplayBox'
import SettingsBox from './SettingsBox'

export default function Wrapper() {
    return (

        <div className='Wrapper'>
            <Header/>
            <InfoBox/>
            <DisplayBox/>
            <SettingsBox/>
        </div>
    )
}
