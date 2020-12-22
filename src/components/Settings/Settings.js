import { Component } from 'react';
import Team1 from '../Team1/Team1';
import Team2 from '../Team2/Team2';

class Settings extends Component
{
    constructor(props) {
        super(props);

    this.state = {
        // playerNames: [],
        // amountPlayers: 0,
        team1Name: 'Team Uno',
        team2Name: 'Team Dos',
        // team1Kit: 'purple',
        // team2Kit: 'green',
        // team1Skills: 5,
        // team2Skills: 5,
        info: false,
    }
}

    render() {

        return (
            <div class="mb-3">
                <form
                    onSubmit={ this.handleSubmit }>

                    <label
                        for="team1"
                        className="form-label">Team 1 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="team1"
                        onChange={ this.handleChangeTeam1 }
                        // value={ team1Name }
                        >
                    </input>

                    <Team1 />

                    <label
                        for="team2"
                        className="form-label">Team 2 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="team1"
                        onChange={ this.handleChangeTeam2 }
                        // value={ team2Name }
                        >
                    </input>

                    <Team2 />

                    <button
                        type="submit"
                        class="btn btn-primary">
                            Start Game
                    </button>
                </form>
            </div>
        );
    }
}

export default Settings;