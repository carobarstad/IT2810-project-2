import React, { Component } from 'react';
import Poetry from './Poetry';



export default class ArtworkBox extends Component {
    render() {
        return (
            <div className="ArtworkBox">
                <div className="Artwork">
                    Insert artwork here
                </div>
                <p><Poetry/></p>
            </div>
        )
    }
}
