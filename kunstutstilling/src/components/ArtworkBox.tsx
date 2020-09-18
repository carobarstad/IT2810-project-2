import React, { Component } from 'react'

export default class ArtworkBox extends Component<{  picture: string, name: string }>{

    render() {
        return (
            <div className="ArtworkBox">
                <div className="Artwork">
                    <img src={process.env.PUBLIC_URL + this.props.picture} alt={this.props.name} width="150" height="150"/>
                </div>
                <p>Her skal det stå et dikt</p>
            </div>
        )
    }
}
