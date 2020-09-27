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

    function toggleView() {
        galleryView ? setGalleryView(false) : setGalleryView(true)
      }

    useEffect(() => {
    const artboxes = document.getElementsByClassName("ArtworkBox");
    if(firstRender){
      
      for (let i:number = 0; i < artboxes.length; i++){
        artboxes[i].setAttribute('style', sessionStorage.getItem('artwork' + (i+1) + 'grid')! + sessionStorage.getItem('liked' + (i+1) + 'display'))
        setFirstRender(false)
      }

    }else{

      for (let i = 0; i < artboxes.length; i++) {
        let storageName : string = 'artwork' + (i+1) + 'grid'
        
        if (galleryView) {
          sessionStorage.setItem(storageName, 'grid-column: 1/4;')
          artboxes[i].setAttribute(
            "style",
            "grid-column: 1/4;"
            )
          } else {
            sessionStorage.setItem(storageName, 'grid-column:auto;')
            artboxes[i].setAttribute(
              "style",
              "grid-column: auto;"
              )
            }
            
            artboxes[i].setAttribute('style', sessionStorage.getItem(storageName)! + sessionStorage.getItem('liked'+(i+1)+'display')!)
      }
    }
          
  }, [galleryView])

  useEffect(()=>{
    //Called in order to rerender

  },[dark])

  if(dark){
    if (galleryView) {
      return (
        <button className="PortraitToggleButton" onClick={()=>toggleView()}>
            <GalleryNight />
            <p>Gallery view</p>
        </button>
      )
    } else {
      return (
        <button className="PortraitToggleButton" onClick={()=>toggleView()}>
            <PortraitNight />
            <p>Portrait view</p>
        </button>
      )     
    }
  } else {
      if (galleryView) {
        return (
          <button className="PortraitToggleButton" onClick={()=>toggleView()}>
              <Gallery />
              <p>Gallery view</p>
          </button>
        )
      } else {
        return (
          <button className="PortraitToggleButton" onClick={()=>toggleView()}>
              <Portrait />
              <p>Portrait view</p>
          </button>
        )     
      }
  }
}
