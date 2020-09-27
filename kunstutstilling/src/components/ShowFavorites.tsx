import React, { Component } from 'react'

interface State{
    active: string
    message: string
}

interface Props{
    active: string
}

export default class ShowFavorites extends Component<Props, State> {
    constructor(initState: {active:string}){
        super(initState)
        this.state = {active: 'false', message: 'Show favorite images'};
    }

    toggleFavorites(){
        let ArtworkBoxes = document.getElementsByClassName('ArtworkBox') as HTMLCollectionOf<HTMLElement>
        if(this.state.active === 'true'){ //Already showing favorites and wants to view the rest:
            for(let i = 0; i < ArtworkBoxes.length; i++){
                ArtworkBoxes[i].setAttribute('style', 'margin: 0;padding: 0;grid-gap: 1em;justify-items: center;')
            }
            this.setState({active: 'false', message: 'Show favorite images'})
            //sessionStorage.removeItem('favoriteDisplay')
        } else {
            for(let i = 0; i < ArtworkBoxes.length; i++){
                if(!localStorage.getItem('artwork'+(i+1))){
                    ArtworkBoxes[i].setAttribute('style', 'display:none')
                }
            }
            this.setState({active: 'true', message: 'Show all images'})
            //sessionStorage.setItem('favoriteDisplay', 'true')
        }
    }
    
    render() {
        return (
            <button className="ShowFavoriteButton" onClick={()=>this.toggleFavorites()}>
                {this.state.message}
            </button>
        )
    }
}
