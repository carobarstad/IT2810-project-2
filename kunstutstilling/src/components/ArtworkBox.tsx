import React, { Component } from 'react'
import Heart from '../svg/heart.svg'
import Filled from '../svg/heart_filled.svg'

interface Props {
    identifier: string
    liked: string|null
    image: string
}

interface State{
    liked: string|null
    image: string
 }

export default class ArtworkBox extends Component<Props, State> {
    constructor(props : {identifier: string, liked:string|null, image:string}){
        super(props)
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

    render(){

        return (
            <div className="ArtworkBox">
            <div className="Artwork">
                Insert artwork here
            </div>
            <button className="LikeButton" onClick={()=>this.handleClick()}>
                <img src={this.state.image} alt="like" width="25" height="25"></img>
            </button>
            <p>Her skal det stå et dikt</p>
        </div>
        )
    }

}
