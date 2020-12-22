import { Component } from 'react';

class Team2 extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            playerNames: [],
            amountPlayers: 0,
            team2Skills: 5,
        };
    }

        render() {
            return (
                <div>
                <label
                for="playerName"
                className="form-label">Player Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="playerName"
                    onChange={ this.handleChangePlayerName }
                    // value={ playerName }
                    >
                </input>
        
                <label
                    for="playerSkills">
                Skill Level
                </label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value="5"
                    id="playerSkills"
                    onChange={ this.handleChangePlayerSkills }>    
                </input>
            </div>
        );
    }
}

export default Team2;