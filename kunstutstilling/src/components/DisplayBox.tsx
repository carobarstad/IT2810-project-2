import React, { useState, useEffect } from "react";
import ArtworkBox from "./ArtworkBox";
//import PortraitToggleButton from './PortraitToggleButton';
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'

export default function DisplayBox() {
  //TODO fiks farge på ikoner ved skifte mellom light og darkmode

    const [galleryView, setGalleryView] = useState(false)
    const [imgNo, setImgNo] = useState(1)

    function toggleView(){
      galleryView ? setGalleryView(false) : setGalleryView(true)
    }
    
  useEffect(() => {
    console.log("The displayview has been changed");
    // Fiks sånn at artworkBox endrer css-grid layout
    const artboxes = document.getElementsByClassName("ArtworkBox");
    for (let i = 0; i < artboxes.length; i++) {
      if (galleryView) {
        artboxes[i].setAttribute(
          "style",
          "grid-column: 1/4; padding: 0; grid-gap: 1em; border: solid black 1px;width: 200px;justify-items: center; margin: auto"
        );
      } else {
        artboxes[i].setAttribute(
          "style",
          "grid-column: auto; padding: 0; grid-gap: 1em; border: solid black 1px;width: 200px;justify-items: center; margin: auto"
        );
      }
    }
  }, [galleryView]);

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
          
            <ArtworkBox imgNr={1} identifier="1" liked={localStorage.getItem('artwork'+'1')} image=''/>
            <ArtworkBox imgNr={2} identifier="2" liked={localStorage.getItem('artwork'+'2')} image=''/>
            <ArtworkBox imgNr={3} identifier="3" liked={localStorage.getItem('artwork'+'3')} image=''/>
            <ArtworkBox imgNr={4} identifier="4" liked={localStorage.getItem('artwork'+'4')} image=''/>
            <ArtworkBox imgNr={5} identifier="5" liked={localStorage.getItem('artwork'+'5')} image=''/>
            <ArtworkBox imgNr={6} identifier="6" liked={localStorage.getItem('artwork'+'6')} image=''/>
        </div>
    )
}
