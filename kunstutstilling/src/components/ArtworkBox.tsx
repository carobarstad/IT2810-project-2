import React, { Component } from 'react'
import Watermelon from '../svg/Watermelon'
import Portrait from '../svg/Portrait'
import Gallery from '../svg/Gallery'
import Apple from '../svg/Apple'
import Avocado from '../svg/Avocado'
import Grapes from '../svg/Grapes'
import Orange from '../svg/Orange'
import Strawberry from '../svg/Strawberry'
import '../css/svg/fruit.css'
import Heart from '../svg/heart.svg'
import Filled from '../svg/heart_filled.svg'


interface Props {
    imgNr: number;
    identifier: string
    liked: string|null
    image: string
}

interface State{
    liked: string|null
    image: string
 }

export default class ArtworkBox extends Component<Props, State>{
    constructor(props : {imgNr: number, identifier: string, liked:string|null, image:string}){
        super(props);
        this.state = {liked: props.liked, image:props.image}
    }
    
    handleClick(){
        if(this.state.liked === 'true'){
            this.setState({liked:'false', image:Heart})
            localStorage.removeItem('artwork'+this.props.identifier)
        } else {
            this.setState({liked: 'true', image:Filled})

            localStorage.setItem('artwork'+this.props.identifier, 'true')
        }
    }

    componentDidMount(){
        if(this.props.liked === 'true'){
            this.setState({liked: 'true', image: Filled})
        } else {
            this.setState({liked: 'false', image:Heart})
        }
    }

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
            <button className="LikeButton" onClick={()=>this.handleClick()}>
                <img src={this.state.image} alt="like" width="25" height="25"></img>
            </button>
            <p>Her skal det stå et dikt</p>
        </div>
        )
    }
}
