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
            team1Banner: props.team1Banner,
            team2Banner: props.team2Banner
        };

        this.handleChangePlayers = this.handleChangePlayers.bind(this);
        this.handleChangeTeam1 = this.handleChangeTeam1.bind(this);
        this.handleChangeTeam2 = this.handleChangeTeam2.bind(this);
        this.handleClickTeam1Kit = this.handleClickTeam1Kit.bind(this);
        this.handleClickTeam2Kit = this.handleClickTeam2Kit.bind(this);
        this.handleClickTeam1Design = this.handleClickTeam1Design.bind(this);
        this.handleClickTeam2Design = this.handleClickTeam2Design.bind(this);
        this.handleChangeTeam1Banner = this.handleChangeTeam1Banner.bind(this);
        this.handleChangeTeam2Banner = this.handleChangeTeam2Banner.bind(this);
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
            team1Kit: e.currentTarget.firstElementChild.src,
        });
    }

    handleClickTeam2Kit(e) {
        e.preventDefault();
        this.setState({
            team2Kit: e.currentTarget.firstElementChild.src,
        });
    }

    handleClickTeam1Design(e) {
        e.preventDefault();
        this.setState({
            team1Design: e.currentTarget.firstElementChild.src,
        });
    }

    handleClickTeam2Design(e) {
        e.preventDefault();
        this.setState({
            team2Design: e.currentTarget.firstElementChild.src,
        });
    }

    handleChangeTeam1Banner(e) {
        this.setState({ team1Banner: e.currentTarget.value });
    }

    handleChangeTeam2Banner(e) {
        this.setState({ team2Banner: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.settingsCompleted({ ...this.state });
    }

    render() {
        const { team1Name, team2Name, amountPlayers, team1Kit, team2Kit, team1Design, team2Design, team1Banner, team2Banner } = this.state;

        return (
            <form
                onSubmit={this.handleSubmit}>
                
                
                    <div className='quantityParent'>
                        <section className='playerQuantityInput'>
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
                        </section>
                    </div>

                    <div className='sectionsParent'>
                        <section className='player1'>
                        <div className='teamNameInput'>
                            <label
                                htmlFor="team1"
                                // className="form-label"
                                >
                                    Team 1 Name</label>
                            <input
                                type="text"
                                // className="form-control"
                                id="team1"
                                onChange={this.handleChangeTeam1}
                                value={team1Name}>
                            </input>

                            <h3>{team1Name}</h3>

                            <div className ='chosenStyleParent'>
                                <div
                                    className='chosenStyle'
                                    style={{
                                        backgroundImage: `url(${team1Design})`
                                    }}>
                                    <img src={team1Kit} alt="Chosen football kit" />
                                </div>
                            </div>

                            <div class="teamKits">
                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Kit}
                                    className="tshirt">
                                    <img src={tshirt} alt='Tshirt' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Kit}
                                    className="vest">
                                    <img src={vest} alt='Vest' style={{ color: 'green' }} />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Kit}
                                    className="heartShirt">
                                    <img src={heartShirt} alt='Shirt with heart on' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Kit}
                                    className="collaredShirt">
                                    <img src={collaredShirt} alt='Collared shirt' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Kit}
                                    className="jumper">
                                    <img src={jumper} alt='Jumper' />
                                </a>

                            </div>

                            <div className="teamDesigns">
                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Design}
                                    className="bananas">
                                    <img src={bananas} alt='Banana pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Design}
                                    className="clouds">
                                    <img src={clouds} alt='Swirly cloud pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Design}
                                    className="cosmos">
                                    <img src={cosmos} alt='Cosmos landscape pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Design}
                                    className="ducks">
                                    <img src={ducks} alt='Duck pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam1Design}
                                    className="paisley">
                                    <img src={paisley} alt='Paisley pattern' />
                                </a>
                            </div>

                            <div className='teamBannerInput'>
                                <label
                                    htmlFor="team1Banner"
                                    // className="form-label"
                                    >
                                        Team 1 Banner Message</label>
                                <input
                                    type="text"
                                    // className="form-control"
                                    id="team1Banner"
                                    onChange={this.handleChangeTeam1Banner}
                                    value={team1Banner}>
                                </input>
                            </div>
                        </div>
                    </section>

                    <section className='player2'>
                        <div className='teamNameInput'>
                            <label
                                htmlFor="team2"
                                // className="form-label"
                                >
                                    Team 2 Name</label>
                            <input
                                type="text"
                                // className="form-control"
                                id="team1"
                                onChange={this.handleChangeTeam2}
                                value={team2Name}>
                            </input>

                            <h3>{team2Name}</h3>

                            <div className ='chosenStyleParent'>
                                <div
                                    className='chosenStyle'
                                    style={{
                                        backgroundImage: `url(${team2Design})`,
                                        backgroundSize: 'cover',
                                    }}>
                                    <img src={team2Kit} alt="Chosen football kit" />
                                </div>
                            </div>

                            <div class="teamKits">
                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Kit}
                                    className="tshirt">
                                    <img src={tshirt} alt='Tshirt' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Kit}
                                    className="vest">
                                    <img src={vest} alt='Vest' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Kit}
                                    className="heartShirt">
                                    <img src={heartShirt} alt='Shirt with heart on' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Kit}
                                    className="collaredShirt">
                                    <img src={collaredShirt} alt='Collared shirt' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Kit}
                                    className="jumper">
                                    <img src={jumper} alt='Jumper' />
                                </a>

                            </div>

                            <div className="teamDesigns">
                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Design}
                                    className="bananas">
                                    <img src={bananas} alt='Banana pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Design}
                                    className="clouds">
                                    <img src={clouds} alt='Cloud pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Design}
                                    className="cosmos">
                                    <img src={cosmos} alt='Cosmos landscape pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Design}
                                    className="ducks">
                                    <img src={ducks} alt='Duck pattern' />
                                </a>

                                <a
                                    href="/"
                                    onClick={this.handleClickTeam2Design}
                                    className="paisley">
                                    <img src={paisley} alt='Paisley pattern' />
                                </a>
                            </div>

                            <div className='teamBannerInput'>
                                <label
                                    htmlFor="teamBanner"
                                    // className="form-label"
                                    >
                                        Team 2 Banner Message</label>
                                <input
                                    type="text"
                                    // className="form-control"
                                    id="team2Banner"
                                    onChange={this.handleChangeTeam2Banner}
                                    value={team2Banner}>
                                </input>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='buttonParent'>
                    <button
                        className='btn'
                        type="submit">
                        Save Settings
                    </button>
                </div>
            </form>
        );
    }
}

export default Settings;