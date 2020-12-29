import { Component } from 'react';

import tshirt from '../../assets/kits/tshirt.svg';
import vest from '../../assets/kits/vest.svg';
import heartShirt from '../../assets/kits/heartShirt.svg';
import collaredShirt from '../../assets/kits/collaredShirt.svg';
import jumper from '../../assets/kits/jumper.svg';

import bananas from '../../assets/backgrounds/bananas.png';
import clouds from '../../assets/backgrounds/clouds.png';
import cosmos from '../../assets/backgrounds/cosmos.png';
import ducks from '../../assets/backgrounds/ducks.png';
import paisley from '../../assets/backgrounds/paisley.jpg';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: props.info,
            team1Name: props.team1Name,
            team2Name: props.team2Name,
            amountPlayers: props.amountPlayers,
            team1Kit: props.team1Kit,
            team2Kit: props.team2Kit,
            team1Design: props.team1Design,
            team2Design: props.team2Design,
            chosenDesignTeam1: props.chosenDesignTeam1,
            chosenDesignTeam2: props.chosenDesignTeam2,
            chosenKitTeam1: props.chosenKitTeam1,
            chosenKitTeam2: props.chosenKitTeam2,
        };

        this.handleChangePlayers = this.handleChangePlayers.bind(this);
        this.handleChangeTeam1 = this.handleChangeTeam1.bind(this);
        this.handleChangeTeam2 = this.handleChangeTeam2.bind(this);
        this.handleClickTeam1Kit = this.handleClickTeam1Kit.bind(this);
        this.handleClickTeam2Kit = this.handleClickTeam2Kit.bind(this);
        this.handleClickTeam1Design = this.handleClickTeam1Design.bind(this);
        this.handleClickTeam2Design = this.handleClickTeam2Design.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangePlayers(e) {
        this.setState({ amountPlayers: +e.currentTarget.value });
    }

    handleChangeTeam1(e) {
        this.setState({ team1Name: e.currentTarget.value });
    }

    handleChangeTeam2(e) {
        this.setState({ team2Name: e.currentTarget.value });
    }

    handleClickTeam1Kit(e) {
        e.preventDefault();
        console.log(e.currentTarget);
        this.setState({
            team1Kit: e.currentTarget.className,
            chosenKitTeam1: e.currentTarget.firstElementChild.src,
        });
    }

    handleClickTeam2Kit(e) {
        e.preventDefault();
        this.setState({
            team2Kit: e.currentTarget.className,
            chosenKitTeam2: e.currentTarget.firstElementChild.src,
        });
    }

    handleClickTeam1Design(e) {
        e.preventDefault();
        this.setState({
            team1Design: e.currentTarget.className,
            chosenDesignTeam1: e.currentTarget.firstElementChild.src,
        });
    }

    handleClickTeam2Design(e) {
        e.preventDefault();
        this.setState({
            team2Design: e.currentTarget.className,
            chosenDesignTeam2: e.currentTarget.firstElementChild.src,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.settingsCompleted({ ...this.state });
    }

    render() {
        const { team1Name, team2Name, amountPlayers, team1Kit, team2Kit, team1Design, team2Design, chosenDesignTeam1, chosenDesignTeam2, chosenKitTeam1, chosenKitTeam2 } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}>

                <label htmlFor="players">How many on each team? (3-11)</label>
                <input
                    type="number"
                    id="players"
                    name="players"
                    min="3"
                    max="11"
                    onChange={this.handleChangePlayers}
                    value={amountPlayers}
                />

                <div className="team1 col-md-6 mt-4">
                    <label
                        htmlFor="team1"
                        className="form-label">Team 1 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="team1"
                        onChange={this.handleChangeTeam1}
                        value={team1Name}>
                    </input>

                    <h3>{team1Name}</h3>

                    <div
                        className='chosenStyle'
                        style={{
                            backgroundImage: `url(${chosenDesignTeam1})`,
                            backgroundSize: 'cover',
                        }}>
                        <img src={chosenKitTeam1} alt="chosen kit" />
                    </div>

                    <div class="kits">
                        <a
                            href="/"
                            onClick={this.handleClickTeam1Kit}
                            className="tshirt">
                            <img src={tshirt} alt={team1Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Kit}
                            className="vest">
                            <img src={vest} alt={team1Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Kit}
                            className="heartShirt">
                            <img src={heartShirt} alt={team1Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Kit}
                            className="collaredShirt">
                            <img src={collaredShirt} alt={team1Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Kit}
                            className="jumper">
                            <img src={jumper} alt={team1Kit} />
                        </a>

                    </div>

                    <div className="patterns">
                        <a
                            href="/"
                            onClick={this.handleClickTeam1Design}
                            className="bananas">
                            <img src={bananas} alt={team1Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Design}
                            className="clouds">
                            <img src={clouds} alt={team1Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Design}
                            className="cosmos">
                            <img src={cosmos} alt={team1Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Design}
                            className="ducks">
                            <img src={ducks} alt={team1Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam1Design}
                            className="paisley">
                            <img src={paisley} alt={team1Design} />
                        </a>
                    </div>

                </div>
                <div className="team2 col-md-6 mt-4">
                    <label
                        htmlFor="team2"
                        className="form-label">Team 2 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="team1"
                        onChange={this.handleChangeTeam2}
                        value={team2Name}>
                    </input>

                    <h3>{team2Name}</h3>

                    <div
                        className='chosenStyle'
                        style={{
                            backgroundImage: `url(${chosenDesignTeam2})`,
                            backgroundSize: 'cover',
                        }}>
                        <img src={chosenKitTeam2} alt="chosen kit" />
                    </div>

                    <div class="kits">
                        <a
                            href="/"
                            onClick={this.handleClickTeam2Kit}
                            className="tshirt">
                            <img src={tshirt} alt={team2Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Kit}
                            className="vest">
                            <img src={vest} alt={team2Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Kit}
                            className="heartShirt">
                            <img src={heartShirt} alt={team2Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Kit}
                            className="collaredShirt">
                            <img src={collaredShirt} alt={team2Kit} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Kit}
                            className="jumper">
                            <img src={jumper} alt={team2Kit} />
                        </a>

                    </div>

                    <div className="patterns">
                        <a
                            href="/"
                            onClick={this.handleClickTeam2Design}
                            className="bananas">
                            <img src={bananas} alt={team2Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Design}
                            className="clouds">
                            <img src={clouds} alt={team2Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Design}
                            className="cosmos">
                            <img src={cosmos} alt={team2Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Design}
                            className="ducks">
                            <img src={ducks} alt={team2Design} />
                        </a>

                        <a
                            href="/"
                            onClick={this.handleClickTeam2Design}
                            className="paisley">
                            <img src={paisley} alt={team2Design} />
                        </a>
                    </div>

                </div>

                <button
                    type="submit"
                    className="btn btn-primary">
                    Save
                    </button>
            </form>
        );
    }
}

export default Settings;