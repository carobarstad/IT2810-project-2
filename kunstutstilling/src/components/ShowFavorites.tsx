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
            for(let i = 1; i <= ArtworkBoxes.length; i++){
                sessionStorage.setItem('liked'+i+'display', 'display: block;')
                ArtworkBoxes[i-1].setAttribute('style', sessionStorage.getItem('liked'+i+'display')! + sessionStorage.getItem('artwork'+i+'grid')!)
            }
            this.setState({active: 'false', message: 'Vis favoritter'})
        } else {
            for(let i = 1; i <= ArtworkBoxes.length; i++){
                if(!localStorage.getItem('artwork'+i)){
                    sessionStorage.setItem('liked'+i+'display', 'display: none;')
                    ArtworkBoxes[i-1].setAttribute('style', sessionStorage.getItem('liked'+i+'display')! + sessionStorage.getItem('artwork'+i+'grid')!)
                }
            }
            this.setState({active: 'true', message: 'Vis alle'})
        }
    }

    //Bruk useLayoutEffect() her?
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
            <button className="SettingsButton" onClick={()=>this.toggleFavorites()}>
                {this.state.message}
            </button>
        )
    }
}
