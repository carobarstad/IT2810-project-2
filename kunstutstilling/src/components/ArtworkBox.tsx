import React, { Component } from 'react'
import Watermelon from '../svg/Watermelon'
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
    poetry: poetryItem
    identifier: string
    liked: string|null
    image: string
}

type poetryItem = {
    title: string,
    author: string,
    lines: string[],
    linecount: string
  }

interface State{
    liked: string|null
    image: string
    poetry: poetryItem
 }
 
 /**
  * Functional component that encases the picture, audio and poem of an art-installation
  */
export default class ArtworkBox extends Component<Props, State>{
    constructor(props : {poetry: poetryItem, imgNr: number, identifier: string, liked:string|null, image:string}){
        super(props);
        
        this.state = {liked: props.liked, image:props.image, poetry: props.poetry}
    }
    
    /**
     * Function that handles click on the like-button
     * Updates this.state and saves whether or not the picture has been liked in localStorage
     */
    handleClick(){
        if(this.state.liked === 'true'){
            this.setState({liked:'false', image:Heart})
            localStorage.removeItem('artwork'+this.props.identifier)
        } else {
            this.setState({liked: 'true', image:Filled})
            localStorage.setItem('artwork'+this.props.identifier, 'true')
        }
    }

    /**
     * Mount-function that runs on rendering. 
     * Used for setting the display of the like-button and ArtworkBox on refresh
     */
    componentDidMount(){
        if(this.props.liked === 'true'){
            this.setState({liked: 'true', image: Filled, poetry: this.props.poetry})
        } else {
            this.setState({liked: 'false', image: Heart, poetry: this.props.poetry})
        }
        
        const ArtworkBoxes = document.getElementsByClassName('ArtworkBox') as HTMLCollectionOf<HTMLElement>
        for (let i = 1; i <= ArtworkBoxes.length; i++){
            ArtworkBoxes[i-1].setAttribute('style', "height: 100%;" + sessionStorage.getItem('artwork' + i + 'grid')! + sessionStorage.getItem('liked'+ i +'display')!)
        }
    }
    componentDidUpdate(){
        
    }

    render() {

        let image = null;
        let audio = null;

        switch(this.props.imgNr){
            case 1:
                image = <Watermelon />
                audio = <audio className="audioPlayer" ref="audio_tag" src={require("../audio/watermelon.mp3")} controls/>
                break
            case 2:
                image = <Strawberry />
                audio = <audio className="audioPlayer" ref="audio_tag" src={require("../audio/strawberry.mp3")} controls/>
                break
            case 3:
                image = <Apple />
                audio = <audio className="audioPlayer" ref="audio_tag" src={require("../audio/apple.mp3")} controls/>
                break
            case 4:
                image = <Avocado />
                audio = <audio className="audioPlayer" ref="audio_tag" src={require("../audio/avocado.mp3")} controls/>
                break
            case 5:
                image = <Grapes />
                audio = <audio className="audioPlayer" ref="audio_tag" src={require("../audio/grapes.mp3")} controls/>
                break
            case 6:
                image = <Orange />
                audio = <audio className="audioPlayer" ref="audio_tag" src={require("../audio/orange.mp3")} controls/>
                break
        }

        const content =  <ul>
        {Object.values(this.state.poetry.lines).map((line: string, i: number) => {
            return (
            <li key={i}>
                <span>{line} </span>
            </li>
            );
        })}
        </ul>

        return (
        <div className="ArtworkBox">
            {image}
            {audio}
            <button className="LikeButton" onClick={()=>this.handleClick()}>
                <img src={this.state.image} alt="like" width="25" height="25"></img>
            </button>

            <h3>{this.state.poetry.title}</h3>
            {this.state.poetry.title !== "Loading poems..." && <div className="poemLines">{content}</div>}
            <div id='test'></div>
        </div>
        )
    }
}
