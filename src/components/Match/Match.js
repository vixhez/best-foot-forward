import Team1Header from '../TeamHeader/Team1Header';
import Team2Header from '../TeamHeader/Team2Header';
import Team1 from '../Team/Team1';
import Team2 from '../Team/Team2';

const Match = ({ team1Kit, team2Kit }) => (
    <div>
        <h1><Team1Header /> vs <Team2Header /></h1> 
        <Team1 />
        <Team2 />
    </div>
);

export default Match;