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
        this.state = {active: 'false', message: 'Vis favoritter'};
    }

    toggleFavorites(){
        let ArtworkBoxes = document.getElementsByClassName('ArtworkBox') as HTMLCollectionOf<HTMLElement>
        if(this.state.active === 'true'){ //Already showing favorites and wants to view the rest:
            for(let i = 0; i < ArtworkBoxes.length; i++){
                ArtworkBoxes[i].setAttribute('style', 'margin: 0;padding: 0;grid-gap: 1em;border: solid black 1px;width: 200px;justify-items: center;margin: auto;')
            }
            this.setState({active: 'false', message: 'Vis favoritter'})
            //sessionStorage.removeItem('favoriteDisplay')
        } else {
            for(let i = 0; i < ArtworkBoxes.length; i++){
                if(!localStorage.getItem('artwork'+(i+1))){
                    ArtworkBoxes[i].setAttribute('style', 'display:none')
                }
            }
            this.setState({active: 'true', message: 'Vis alle'})
            //sessionStorage.setItem('favoriteDisplay', 'true')
        }
    }

    /*componentDidMount(){
        if(sessionStorage.getItem('favoriteDisplay')){
            console.log('fant favorites i sessionstorage')
            let ArtworkBoxes = document.getElementsByClassName('ArtworkBox') as HTMLCollectionOf<HTMLElement>
            for(let i = 0; i < ArtworkBoxes.length; i++){
                if(!localStorage.getItem('artwork'+(i+1))){
                    ArtworkBoxes[i].setAttribute('style', 'display:none')
                }
            }
            this.setState({active: 'true', message: 'Vis alle'})
        }
    }*/
    
    render() {
        return (
            <button onClick={()=>this.toggleFavorites()}>
                {this.state.message}
            </button>
        )
    }
}
