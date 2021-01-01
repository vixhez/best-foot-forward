import { Component } from 'react';

class PlayerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: props.players,
            playerComplete: props.playerComplete,
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
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ playerComplete: true });
        this.props.playerAdded({ ...this.state });
    }

    render() {
        const { players, playerComplete } = this.state;

        return !playerComplete ? (
            <div
                id={this.props.id}>
                <form
                    onSubmit={this.handleSubmit}>
                    <div className='playerFormParent'>
                        <label
                            htmlFor="playerName"
                            >Player Name</label>
                        <input
                            type="text"
                            id={this.props.id}
                            onChange={this.handleChangePlayerName}
                            value={players.playerName}
                        >
                        </input>

                        <label
                            htmlFor="playerSkills">
                            Skill Level
                    </label>
                        <input
                            className='skillSlider'
                            type="range"
                            min="0"
                            max="10"
                            value={+players.playerSkills}
                            id={this.props.id}
                            onChange={this.handleChangePlayerSkills}>
                        </input>

                        <button
                            type="submit"
                            className="btn btn-primary">
                            Confirm Player
                        </button>
                    </div>
                </form>
            </div>
        ) : (
                <p>{players.playerName} added!</p>
            );
    }
}

export default PlayerForm;