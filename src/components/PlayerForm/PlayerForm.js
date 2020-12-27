import { Component } from 'react';

class PlayerForm extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            players: props.players,
            // playerName: props.playerName,
            // // playerNames: props.playerNames,
            // playerSkills: props.playerSkills,
        };

        this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
        this.handleChangePlayerSkills = this.handleChangePlayerSkills.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlayerName(e) {
        const enteredName = e.currentTarget.value;
        this.setState({
            players: {
                ...this.state.players,
                playerName: enteredName,
            }
        });
    }

    handleChangePlayerSkills(e) {
        const enteredSkills = +e.currentTarget.value;
        this.setState({
            players: {
                ...this.state.players,
                playerSkills: enteredSkills
            }
        });
        console.log(this.state.players);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.playerAdded({ ...this.state });
    }

    render() {
        const { players, playerName, playerSkills } = this.state;

        return (
            <div
                id={ this.props.id }>
                <form
                    onSubmit={ this.handleSubmit }>
                    <label
                        htmlFor="playerName"
                        className="form-label">Player Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id={ this.props.id }
                        onChange={ this.handleChangePlayerName }
                        value={ players.playerName }
                        >
                    </input>
            
                    <label
                        htmlFor="playerSkills">
                    Skill Level
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={ +players.playerSkills }
                        id={ this.props.id }
                        onChange={ this.handleChangePlayerSkills }>    
                    </input>

                    <button
                        type="submit"
                        className="btn btn-primary">
                    Confirm Player
                    </button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;