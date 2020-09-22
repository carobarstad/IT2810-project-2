import React from 'react';

export default function Gallery() {
    return (
        <div className="Gallery">
            <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <line x1='17' y1='0'  x2='17' y2='50' stroke="black"/>
                <line x1='34' y1='0'  x2='34' y2='50' stroke="black"/>
                <line x1='0'  y1='17' x2='50' y2='17' stroke="black"/>
                <line x1='0'  y1='34' x2='50' y2='34' stroke="black"/>
                <line x1='0'  y1='1'  x2='50' y2='1'  stroke="black"/>
                <line x1='0'  y1='49' x2='50' y2='49' stroke="black"/>
                <line x1='1'  y1='0'  x2='1'  y2='50' stroke="black"/>
                <line x1='49' y1='0'  x2='49' y2='50' stroke="black"/>
            </svg>
        </div>
    );
}


