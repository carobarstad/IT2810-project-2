import React from 'react'
import Portrait from '../svg/portrait.svg'
import Gallery from '../svg/gallery.svg'

function PortraitToggleButton() {

    function handleOnClick(){
        
    }

    return (
        <button className="PortraitToggleButton" onClick={()=>handleOnClick()}>
            <img src={Gallery} alt="gal" width="45" height="45"/>
            <img src={Portrait} alt="port" width="45" height="45"/>
        </button>
    )
}

export default PortraitToggleButton
