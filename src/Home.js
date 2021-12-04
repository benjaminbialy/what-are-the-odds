import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <h1 className="home--title">What are the odds?</h1>
            <p className="home--description">The game where you guess what's more likely to happen.</p>
            <div className="home--play">
                <a className="home--play--button" href="./game">Play</a>   
            </div>
        </div>
    )
}

export default Home
