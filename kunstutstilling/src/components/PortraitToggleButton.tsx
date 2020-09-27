import React, { useState, useEffect, useContext } from 'react'
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'
import PortraitNight from '../svg/PortraitNight'
import GalleryNight from '../svg/GalleryNight'
import ThemeContext from './ThemeContext'

export default function PortraitToggleButton() {
    
    const [galleryView, setGalleryView] = useState(false)
    const [firstRender, setFirstRender] = useState(JSON.parse(sessionStorage.getItem('visited')!))
    const {dark, toggle} = useContext(ThemeContext)

    /**
     * Function that sets the ArtworkBox's style before refresh if application is refreshed, 
     * and updates it with the respective value when the button is clicked. 
     */
    useEffect(() => {
      const artboxes = document.getElementsByClassName("ArtworkBox");
      if(firstRender){
        
        for (let i = 0; i < artboxes.length; i++){
          artboxes[i].setAttribute('style', sessionStorage.getItem('artwork' + (i+1) + 'grid')! + sessionStorage.getItem('liked' + (i+1) + 'display'))
          setFirstRender(false)
        }

      }else{

        for (let i = 0; i < artboxes.length; i++) {
          let storageName : string = 'artwork' + (i+1) + 'grid'
          
          if (galleryView) { // Updates sessionStorage variable for each ArtworkBox to take up whole row in DisplayBox
            sessionStorage.setItem(storageName, 'grid-column: 1/4;')
            artboxes[i].setAttribute(
              "style",
              "grid-column: 1/4;"
              )
          } else { // Updates sessionStorage variable for each ArtworkBox to take up one cell in DisplayBox
            sessionStorage.setItem(storageName, 'grid-column:auto;')
            artboxes[i].setAttribute(
              "style",
              "grid-column: auto;"
              )
            }
          
          // Updating ArtworkBox's styl attribute
          artboxes[i].setAttribute('style', sessionStorage.getItem(storageName)! + sessionStorage.getItem('liked'+(i+1)+'display')!)
        }
      }
          
  }, [galleryView])

  useEffect(()=>{
    //Called in order to rerender onClick for ThemeButton
  }, [dark])

  //Return button with path to right svg in respect to dark-mode and portrait or gallery view
  if(dark){
    if (galleryView) {
      return (
        <button className="PortraitToggleButton" onClick={()=>setGalleryView(!galleryView)}>
            <GalleryNight />
            <p>Gallery view</p>
        </button>
      )
    } else {
      return (
        <button className="PortraitToggleButton" onClick={()=>setGalleryView(!galleryView)}>
            <PortraitNight />
            <p>Portrait view</p>
        </button>
      )     
    }
  } else {
      if (galleryView) {
        return (
          <button className="PortraitToggleButton" onClick={()=>setGalleryView(!galleryView)}>
              <Gallery />
              <p>Gallery view</p>
          </button>
        )
      } else {
        return (
          <button className="PortraitToggleButton" onClick={()=>setGalleryView(!galleryView)}>
              <Portrait />
              <p>Portrait view</p>
          </button>
        )     
      }
  }
}
