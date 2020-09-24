import React, { useState, useEffect } from 'react'
import ArtworkBox from './ArtworkBox';
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'

export default function DisplayBox() {

    const [galleryView, setGalleryView] = useState(false)

    function toggleView(){
        galleryView ? setGalleryView(false) : setGalleryView(true)
    }

    useEffect(()=> {
        // Fiks sånn at artworkBox endrer css-grid layout
        const artworkboxes = document.getElementsByClassName("ArtworkBox")
        for (let i = 0; i < artworkboxes.length; i++){
            if(galleryView){
                artworkboxes[i].setAttribute('style', 'grid-column: 1/4; padding: 0; grid-gap: 1em; border: solid black 1px;')
            } else {
                artworkboxes[i].setAttribute('style', 'grid-column: auto; padding: 0; grid-gap: 1em; border: solid black 1px;')
            }
        }
    }, [galleryView])

    return (
        //<button onClick={() => setImgNo(2)}>Endre bilde</button>
        <div className='DisplayBox'>
            <h2 className="Tittel">Her skal kunstverkene vises.</h2> 
            <button className="PortraitToggleButton" onClick={()=>toggleView()}>
                <Gallery />
                <Portrait />
            </button>
          
            <ArtworkBox imgNr={1} identifier="1" liked={localStorage.getItem('artwork1')} image=''/>
            <ArtworkBox imgNr={2} identifier="2" liked={localStorage.getItem('artwork2')} image=''/>
            <ArtworkBox imgNr={3} identifier="3" liked={localStorage.getItem('artwork3')} image=''/>
            <ArtworkBox imgNr={4} identifier="4" liked={localStorage.getItem('artwork4')} image=''/>
            <ArtworkBox imgNr={5} identifier="5" liked={localStorage.getItem('artwork5')} image=''/>
            <ArtworkBox imgNr={6} identifier="6" liked={localStorage.getItem('artwork6')} image=''/>
        </div>
    )
}
