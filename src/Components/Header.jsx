import React from 'react'
import MemePhoto from '../Images/Troll Face.png'
export default function Header(){
    return(
        <div className="header">
            <div className="first-part">
                <img src={MemePhoto} alt="Photo" />
                <h2>Meme Generator</h2>
            </div>
            <header className="second-part">
                <p>React Course - Project 3</p>
            </header>
        </div>
    )
}