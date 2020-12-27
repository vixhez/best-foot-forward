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
        team1Name: props.team1Name,
        team2Name: props.team2Name,
        // team1Kit: 'purple',
        // team2Kit: 'green',
        // team1Skills: 5,
        // team2Skills: 5,
        info: props.info,
        amountPlayers: props.amountPlayers,
    };

    this.handleChangePlayers = this.handleChangePlayers.bind(this);
    this.handleChangeTeam1 = this.handleChangeTeam1.bind(this);
    this.handleChangeTeam2 = this.handleChangeTeam2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChangePlayers (e) {
        this.setState({ amountPlayers: +e.currentTarget.value });
    }

    handleChangeTeam1 (e) {
        this.setState({ team1Name: e.currentTarget.value });
    }


    handleChangeTeam2(e) {
        this.setState({ team2Name: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.settingsCompleted({ ...this.state });
    }

    render() {
        const { team1Name, team2Name, amountPlayers } = this.state;
        
        return (
            <form
                onSubmit={ this.handleSubmit }>

                <label htmlFor="players">How many on each team? (3-11)</label>
                <input
                    type="number"
                    id="players"
                    name="players"
                    min="3"
                    max="11"
                    onChange={ this.handleChangePlayers }
                    // value={ amountPlayers }
                />     


                
                <div className="team1 col-md-6 mt-4">
                    <label
                        htmlFor="team1"
                        className="form-label">Team 1 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="team1"
                        onChange={ this.handleChangeTeam1 }
                        value={ team1Name }>
                        </input>
                
                    <h3>{ team1Name }</h3>

                </div>
                <div className="team2 col-md-6 mt-4">
                    <label
                        htmlFor="team2"
                        className="form-label">Team 2 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="team1"
                        onChange={ this.handleChangeTeam2 }
                        value={ team2Name }>
                    </input>
            
                    <h3>{ team2Name }</h3>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary">
                            Save Team Names
                    </button>

                    {/* <button
                        type="submit"
                        class="btn btn-primary">
                            Start Game
                    </button> */}
            </form>
        );
    }
}

export default Settings;