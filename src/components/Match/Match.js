import MatchTeam1 from '../MatchTeam/MatchTeam1';
import MatchTeam2 from '../MatchTeam/MatchTeam2';

import team1Crowd from '../../assets/team1Crowd.png';
import team2Crowd from '../../assets/team2Crowd.png';

const Match = ({ team1Kit, team2Kit, team1Design, team2Design, team1Banner, team2Banner, team1Name, team2Name }) => (
    <>
        <div className='headerParent'>
            <h2>{team1Name} <span>vs</span> {team2Name}</h2>
        </div>
        <div className='matchParent'>
            {/* <div className='pitch'> */}
            <div className='matchTeam1Parent'>
                <div
                    className='team1Crowd'
                    style={{ backgroundImage: `url(${team1Design})` }}>
                    <div className='team1CrowdImage'>
                        <img src={team1Crowd} alt='Cartoon crowd' />
                    </div>
                    <p className='teamBanner'>
                        {team1Banner}
                    </p>
                </div>
            </div>
            <div className='teamsOnPitch'>
                <div className='team1OnPitch'> <MatchTeam1 />
                </div>
                <div className='team2OnPitch'>
                    <MatchTeam2 />
                </div>
            </div>
            <div className='matchTeam2Parent'>

                <div
                    className='team2Crowd'
                    style={{ backgroundImage: `url(${team2Design})` }}>
                    <div className='team2CrowdImage'>
                        <img src={team2Crowd} alt='Cartoon crowd' />
                    </div>
                    <p className='teamBanner'>
                        {team2Banner}
                    </p>
                </div>

            </div>
        </div>
        {/* </div> */}
    </>
);

export default Match;