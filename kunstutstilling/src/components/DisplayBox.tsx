import React, { useState, useEffect } from 'react'
import ArtworkBox from './ArtworkBox';
//import PortraitToggleButton from './PortraitToggleButton';
import Portrait from '../svg/portrait.svg'
import Gallery from '../svg/gallery.svg'



export default function DisplayBox() {

    const [galleryView, setGalleryView] = useState(false)

    function toggleView(){
        galleryView ? setGalleryView(false) : setGalleryView(true)
    }

    useEffect(()=> {
        console.log("The displayview has been changed")
        // Fiks sånn at artworkBox endrer css-grid layout
        const artboxes = document.getElementsByClassName("ArtworkBox")
        for (var i = 0; i < artboxes.length; i++){
            if(galleryView){
                artboxes[i].setAttribute('style', 'grid-column: 1/4; padding: 0; grid-gap: 1em; border: solid black 1px;width: 200px;justify-items: center; margin: auto')
            } else {
                artboxes[i].setAttribute('style', 'grid-column: auto; padding: 0; grid-gap: 1em; border: solid black 1px;width: 200px;justify-items: center; margin: auto')
            }
        }
    }, [galleryView])

    return (
        <div className='DisplayBox'>
            <h2 className="Tittel">Her skal kunstverkene vises.</h2> 
            <button className="PortraitToggleButton" onClick={()=>toggleView()}>
                <img src={Gallery} alt="gal" width="45" height="45"/>
                <img src={Portrait} alt="port" width="45" height="45"/>
            </button>
            <ArtworkBox identifier="1"/>
            <ArtworkBox identifier="2"/>
            <ArtworkBox identifier="3"/>
            <ArtworkBox identifier="4"/>
            <ArtworkBox identifier="5"/>
            <ArtworkBox identifier="6"/>
        </div>
    )
}
