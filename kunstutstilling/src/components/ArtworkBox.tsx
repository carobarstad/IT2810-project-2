import React, { Component } from 'react'
import Watermelon from '../svg/Watermelon'
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'
import Apple from '../svg/Apple'
import Avocado from '../svg/Avocado'
import Grapes from '../svg/Grapes'
import Orange from '../svg/Orange'
import Strawberry from '../svg/Strawberry'
import '../css/svg/apple.css'

interface Props {
    imgNr: number;
    name: string;
}

export default class ArtworkBox extends Component<Props>{


    render() {

        let image = null;

        switch(this.props.imgNr){
            case 1:
                image = <Watermelon />
                break;
            case 2:
                image = <Strawberry />
                break;
            case 3:
                image = <Apple />
                break;
            case 4:
                image = <Avocado />
                break;
            case 5:
                image = <Grapes />
                break;
            case 6:
                image = <Orange />
                break;
        }

        return (
            <div className="ArtworkBox">
                <div className="Artwork">
                    {image}
                </div>
                <p>Her skal det stå et dikt</p>
            </div>
        )
    }
}
