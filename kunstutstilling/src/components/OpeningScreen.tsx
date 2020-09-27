import React, {useEffect, useState} from 'react'


export default function OpeningScreen() {
    /**
     * Initialization of variables
     */
    let wrapperDummy = document.getElementsByClassName("Wrapper") as HTMLCollectionOf<HTMLElement> 
    let openingScreenDummy = document.getElementsByClassName("OpeningScreen") as HTMLCollectionOf<HTMLElement>
    
    const [wrapper, setWrapper] = useState(wrapperDummy[0])
    const [openingScreen, setOpeningScreen] = useState(openingScreenDummy[0]) 
    const [returning, setReturning] = useState('')
    
    /**
     * Function that changes the style-attribute of the wrapper and welcoming page
     * initializing the transition
     */
    function handleClick() {    
        
        wrapper?.setAttribute('style', 'display: block;')
        openingScreen?.setAttribute('style', 'height:0; transition: height 2s;')
        
        sessionStorage.setItem('visited', 'true')
        localStorage.setItem('returning', 'true')
    }
    
    /**
     * Function that edits the welcome message to 'welcome back'
     * on returning to the page after the first session. 
     */
    useEffect(() => {
        let wrapperArray = document.getElementsByClassName("Wrapper") as HTMLCollectionOf<HTMLElement>
        let openingScreenArray = document.getElementsByClassName("OpeningScreen") as HTMLCollectionOf<HTMLElement>

        setWrapper(wrapperArray[0])
        setOpeningScreen(openingScreenArray[0])

        if (localStorage.getItem('returning')){
            setReturning(' back')
        }
    }, [])

    /**
     * Function for the conditional statement that disables the welcoming page
     * on refresh.  
     */
    function changeStyleOpening(){   

        wrapper?.setAttribute('style', 'display: block;')
        openingScreen?.setAttribute('style', 'display:none')
    }

    if(sessionStorage.getItem('visited') === 'true'){
        changeStyleOpening()
    }

    return (
        <div className="OpeningScreen" onClick={()=>handleClick()}>
            <h1>Welcome{returning}</h1>
        </div>
    )
}
