import { Component } from 'react';

class PlayerForm extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            playerName: props.playerName,
            playerNames: props.playerNames,
            amountPlayers: props.amountPlayers,
            playerSkills: props.playerSkills,
        };

        this.handleChangePlayerName = this.handleChangePlayerName.bind(this);
        this.handleChangePlayerSkills = this.handleChangePlayerSkills.bind(this);
    }

    handleChangePlayerName(e) {
        console.log('oi oi');
    }

    handleChangePlayerSkills(e) {
        console.log('savaloy');
    }

    render() {
        const { playerNames, amountPlayers } = this.state;

        return (
            <div
                id={ this.props.id }>
                <form>
                    <label
                        htmlFor="playerName"
                        className="form-label">Player Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id={ this.props.id }
                        onChange={ this.handleChangePlayerName }
                        // value={ playerName }
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
                        value="5"
                        id={ this.props.id }
                        onChange={ this.handleChangePlayerSkills }>    
                    </input>

                </form>
            </div>
        );
    }
}

export default PlayerForm;