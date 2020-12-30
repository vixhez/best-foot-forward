import { Component } from 'react';
import PlayerForm from '../PlayerForm';

class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amountPlayers: props.amountPlayers,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { amountPlayers } = this.state;

        const playerDetailsEntry = () => {
            const playerDetailsList = [];

            for (let i = 1; i <= (amountPlayers * 2); i++) {
                playerDetailsList.push(<PlayerForm key={i} id={i} />)
            }
            return playerDetailsList;
        };

        return (
            <>
                <ul>
                    <li>{playerDetailsEntry()}</li>
                </ul>
            </>
        );
    }
}

export default Players;