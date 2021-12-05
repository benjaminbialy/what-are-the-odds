import React from 'react';
import GameButtons from "./GameButtons.js"

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = { likelihood__buttons: <GameButtons/> };
  }
    render() {
      return ( 
        <div className="game">
          <div className="game--left">
            <div className="game--left--event">{this.props.stated__event__name}</div>
            <p>has a</p>
            <div className="game--left--odds">{this.props.stated__odds}</div>
            <p>chance of occuring.</p>
          </div>
          <div className="home--right">
            <div className="game--right--event">{this.props.unstated__event__name}</div>
            <p>has a</p>
            <div className="game--right--buttons">{this.state.likelihood__buttons}</div>
            <p>chance of occuring than {this.props.stated__event__name}.</p>
          </div>
        </div>
        );
    }
}

export default Game;