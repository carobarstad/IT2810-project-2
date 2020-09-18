import React, {useState, useEffect} from 'react'

export default function ToggleWelcome() {
    const [showWelcome, setWelcome] = useState(true)
  
    const htmlWelcomeElem = document.getElementsByClassName('OpeningScreen')[0]
    /*htmlWelcomeElem.addEventListener('click', () => setWelcome(false))*/

    useEffect(() => {
    if(!showWelcome){
        const wrapper = document.getElementsByClassName("Wrapper")
        const openingScreen = document.getElementsByClassName("OpeningScreen")
    
        wrapper[0].setAttribute('style', 'display: grid; width: 100%; grid-gap: 1em;')
        openingScreen[0].setAttribute('style', 'display: none')
        }
    }, [showWelcome])
    
    return (
        <div>
            
        </div>
    )
}
