import React from 'react'
import GameButtons from "./GameButtons.js"
import { useState } from 'react';

function Game() {
  const [event, setEvent] = useState(null);


  return (
    <div>
       <div className="game">
          <div className="game--left">
            <div className="game--left--event"></div>
            <p>has a</p>
            <div className="game--left--odds"></div>
            <p>chance of occuring.</p>
          </div>
          <div className="home--right">
            <div className="game--right--event"></div>
            <p>has a</p>
            <div className="game--right--buttons">
              <GameButtons/>
            </div>
            <p>chance of occuring than.</p>
          </div>
        </div>
    </div>
  )
}

export default Game
