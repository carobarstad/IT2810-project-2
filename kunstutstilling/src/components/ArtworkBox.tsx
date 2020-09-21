import React, { useState } from 'react'
import Heart from '../svg/heart.svg'
import Filled from '../svg/heart_filled.svg'

export default function ArtworkBox() {

    const [liked, setLiked] = useState(false)
    const [image, setImage] = useState(Heart)

    function handleClick(){
        if(liked){
            setLiked(false)
            setImage(Heart)
        } else {
            setLiked(true)
            setImage(Filled)
        }
    }

    

    return (
        <div className="ArtworkBox">
            <div className="Artwork">
                Insert artwork here
            </div>
            <button className="PortraitToggleButton" onClick={()=>handleClick()}>
                <img className="LikeButton" src={image} alt="like" width="30" height="30"></img>
            </button>
            <p>Her skal det stå et dikt</p>
        </div>
    )
    
}
