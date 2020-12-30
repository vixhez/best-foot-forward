import Team1Header from '../TeamHeader/Team1Header';
import Team2Header from '../TeamHeader/Team2Header';
import MatchTeam1 from '../MatchTeam/MatchTeam1';
import MatchTeam2 from '../MatchTeam/MatchTeam2';

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

const Match = ({ team1Kit, team2Kit, team1Design, team2Design,team1Banner, team2Banner }) => (
    <div>
        <h1><Team1Header /> vs <Team2Header /></h1>
        <div
            className="team1Banner"
            style={{ backgroundImage: `url(${team1Design})` }}>
            { team1Banner }
        </div>
        <MatchTeam1 />
        <MatchTeam2 />
        <div 
            className="team2Banner"
            style={{ backgroundImage: `url(${team2Design})` }}>
            { team2Banner }
        </div>
    </div>
);

export default Match;