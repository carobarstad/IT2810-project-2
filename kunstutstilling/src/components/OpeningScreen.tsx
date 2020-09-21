import React, {useEffect, useState} from 'react'


export default function OpeningScreen() {
    let wrapperDummy = document.getElementsByClassName("Wrapper") as HTMLCollectionOf<HTMLElement>
    let openingScreenDummy = document.getElementsByClassName("OpeningScreen") as HTMLCollectionOf<HTMLElement>
    
    const [wrapper, setWrapper] = useState(wrapperDummy[0])
    const [openingScreen, setOpeningScreen] = useState(openingScreenDummy[0])
    
    function handleClick() {    
        
        wrapper?.setAttribute('style', 'display: grid; width: 100%; grid-gap: 1em;')
        openingScreen?.setAttribute('style', 'height:0; transition: height 2s;')
        
        sessionStorage.setItem('visited', 'true')
    }
    
    useEffect(() => {
        let wrapperArray = document.getElementsByClassName("Wrapper") as HTMLCollectionOf<HTMLElement>
        let openingScreenArray = document.getElementsByClassName("OpeningScreen") as HTMLCollectionOf<HTMLElement>

        setWrapper(wrapperArray[0])
        setOpeningScreen(openingScreenArray[0])
    }, [])

    function changeStyleOpening(){   

        wrapper?.setAttribute('style', 'display: grid; width: 100%; grid-gap: 1em;')
        openingScreen?.setAttribute('style', 'display:none')
    }

    if(sessionStorage.getItem('visited') === 'true'){
        changeStyleOpening()
    }
    return (
        <div className="OpeningScreen" onClick={()=>handleClick()}>
            <h1>Welcome</h1>
        </div>
    )
}
