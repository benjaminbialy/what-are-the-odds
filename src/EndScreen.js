import React from 'react'

function EndScreen() {
    return (
        <div className="end__screen">
           <h1 className="end__screen--title">Unlucky</h1>
           <div className="end__screen--buttons">
               <div className="end__screen--buttons--home">
                    <a className="end__screen--buttons--home" href="./game">Play Again</a>   
               </div>
               <div className="end__screen--buttons--game--a">
                    <a className="end__screen--buttons--game--a" href="./">Back to home</a>   
               </div>
           </div>
        </div>
    )
}

export default EndScreen
