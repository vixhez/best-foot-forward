import Team1Header from '../TeamHeader/Team1Header';
import Team2Header from '../TeamHeader/Team2Header';
import MatchTeam1 from '../MatchTeam/MatchTeam1';
import MatchTeam2 from '../MatchTeam/MatchTeam2';

import team1Crowd from '../../assets/team1Crowd.png';
import team2Crowd from '../../assets/team2Crowd.png';

const Match = ({ team1Kit, team2Kit, team1Design, team2Design, team1Banner, team2Banner }) => (
    <div className='matchParent'>
        <div className='headerParent'>
            <h1><Team1Header /> vs <Team2Header /></h1>
        </div>
        <div className='team1Parent'>
            <div
                className='team1Crowd'
                style={{ backgroundImage: `url(${team1Design})` }}>
                <img src={team1Crowd} alt='Cartoon crowd' />
                <p className='teamBanner'>
                    {team1Banner}
                </p>
            </div>
            <MatchTeam1 />
        </div>
        <div className='team2Parent'>
            <MatchTeam2 />
            <div
                className='team2Crowd'
                style={{ backgroundImage: `url(${team2Design})` }}>
                <img src={team2Crowd} alt='Cartoon crowd' />
                <p className='teamBanner'>
                    {team2Banner}
                </p>

            </div>
        </div>
    </div>
);

export default Match;