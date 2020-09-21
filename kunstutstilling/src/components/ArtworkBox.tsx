import React, { useState, useEffect } from 'react'
import Heart from '../svg/heart.svg'
import Filled from '../svg/heart_filled.svg'

export default function ArtworkBox({identifier}:{identifier:string}) {

    const [liked, setLiked] = useState(false)
    const [image, setImage] = useState(Heart)

    function handleClick(){
        if(liked){
            setLiked(false)
            setImage(Heart)
            localStorage.removeItem('artwork'+identifier)
        } else {
            setLiked(true)
            setImage(Filled)
            localStorage.setItem('artwork'+identifier, 'true')
        }
    }

    //TODO Legg inn støtte for localStorage 
    useEffect(() => {
        if(localStorage.getItem('artwork'+identifier)){
            setLiked(true)
            setImage(Filled)
        }
    }, [])

    return (
        <div className="ArtworkBox">
            <div className="Artwork">
                Insert artwork here
            </div>
            <button className="LikeButton" onClick={()=>handleClick()}>
                <img src={image} alt="like" width="25" height="25"></img>
            </button>
            <p>Her skal det stå et dikt</p>
        </div>
    )
    
}
