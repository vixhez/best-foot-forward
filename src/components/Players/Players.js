import { Component } from 'react';
import PlayerForm from './PlayerForm';

class Players extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            amountPlayers: props.amountPlayers,
        };
    }

        render() {
            const { amountPlayers } = this.state;

            const playerDetailsEntry = () => {
                const playerDetailsList = [];

                for (let i = 1; i <= (amountPlayers * 2); i++) {
                    playerDetailsList.push(<PlayerForm />)
                }
                return playerDetailsList;
            };

            return (
            <ul>
                { playerDetailsEntry() }
            </ul>
            )



    }
};

export default Players;