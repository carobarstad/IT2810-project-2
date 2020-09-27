import React, { useState, useEffect } from 'react'
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'

export default function PortraitToggleButton() {
    
    const [galleryView, setGalleryView] = useState(false)

    function toggleView() {
        galleryView ? setGalleryView(false) : setGalleryView(true)
      }

    useEffect(() => {
          // Fiks sånn at artworkBox endrer css-grid layout
    const artboxes = document.getElementsByClassName("ArtworkBox");
    for (let i = 0; i < artboxes.length; i++) {
      if (galleryView) {
        artboxes[i].setAttribute(
          "style",
          "grid-column: 1/4; padding: 0; grid-gap: 1em; justify-items: center;"
        )
      } else {
        artboxes[i].setAttribute(
          "style",
          "grid-column: auto; padding: 0; grid-gap: 1em; justify-items: center;"
        )
      }
    }
  }, [galleryView])

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
