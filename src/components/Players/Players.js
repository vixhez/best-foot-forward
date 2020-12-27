import { Component } from 'react';
import PlayerForm from '../PlayerForm';

class Players extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            amountPlayers: props.amountPlayers,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const { playerNames } = this.state;
    //     this.setState({ playerNames:
    //         playerDetailsList.map((player)=>playerNames.push(player))
    // });

    handleSubmit(e) {
        console.log('testing testing');
    }


    render() {
        const { amountPlayers } = this.state;

        const playerDetailsEntry = () => {
            const playerDetailsList = [];

        for (let i = 1; i <= (amountPlayers * 2); i++) {
            playerDetailsList.push(<PlayerForm key={i} id={i}/>)
            }
            return playerDetailsList;
        };

        return (
        <>
            <ul>
                <li>{ playerDetailsEntry() }</li>
            </ul>


            {/* <button
                type="submit"
                className="btn btn-primary">
            Ready?
            </button> */}
        </>
        );
    }
}

export default Players;





// import { Component } from 'react';
// import PlayerForm from '../PlayerForm';

// class Players extends Component
// {
//     constructor(props) {
//         super(props);

//         this.state = {
//             amountPlayers: props.amountPlayers,
//             playerNames: props.playerNames,
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const { playerNames } = this.state;
//         this.setState({ playerNames:
//             playerDetailsList.map((player)=>playerNames.push(player))
//     });
//     }

//     render() {
//         const { amountPlayers } = this.state;

//         const playerDetailsEntry = () => {
//             const playerDetailsList = [];

//         for (let i = 1; i <= (amountPlayers * 2); i++) {
//             playerDetailsList.push(<PlayerForm key={i} id={i}/>)
//             }
//             return playerDetailsList;
//         };

//         return (
//         <>
//             <form
//                 onSubmit={ this.handleSubmit() }>
//                 <ul>
//                     <li>{ playerDetailsEntry() }</li>
//                 </ul>
//             </form>


//             <button
//                 type="submit"
//                 className="btn btn-primary">
//             Ready?
//             </button>
//         </>
//         );
//     }
// };

// export default Players;