import React from 'react'

function handleClick() {
    const wrapper = document.getElementsByClassName("Wrapper")
    const openingScreen = document.getElementsByClassName("OpeningScreen")
    
    wrapper[0].setAttribute('style', 'display: grid; width: 100%; grid-gap: 1em;')
    openingScreen[0].setAttribute('style', 'height:0; transition: height 2s;')
}

export default function OpeningScreen() {
    return (
        <div className="OpeningScreen" onClick={handleClick}>
            <h1>Welcome</h1>
        </div>
    )
}
