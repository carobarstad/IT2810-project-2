import React, { useState, useEffect } from 'react'
import ArtworkBox from './ArtworkBox';
//import PortraitToggleButton from './PortraitToggleButton';
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'

export default function DisplayBox() {

    const [galleryView, setGalleryView] = useState(false)
    const [imgNo, setImgNo] = useState(1)

    function toggleView(){
        galleryView ? setGalleryView(false) : setGalleryView(true)
    }

    useEffect(()=> {
        console.log("The displayview has been changed")
        // Fiks sånn at artworkBox endrer css-grid layout
        const artboxes = document.getElementsByClassName("ArtworkBox")
        for (let i = 0; i < artboxes.length; i++){
            if(galleryView){
                artboxes[i].setAttribute('style', 'grid-column: 1/4; padding: 0; grid-gap: 1em; border: solid black 1px;width: 200px;justify-items: center; margin: auto')
            } else {
                artboxes[i].setAttribute('style', 'grid-column: auto; padding: 0; grid-gap: 1em; border: solid black 1px;width: 200px;justify-items: center; margin: auto')
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
            

            <ArtworkBox imgNr={1} name='watermelon' />
            <ArtworkBox imgNr={2} name='strawberry' />
            <ArtworkBox imgNr={3} name='apple' />
            <ArtworkBox imgNr={4} name='avocado' />
            <ArtworkBox imgNr={5} name='grapes' />
            <ArtworkBox imgNr={6} name='orange' />
          
        </div>
    )
}
