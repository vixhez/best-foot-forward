import Header from '../Header/Header';
import Settings from '../Settings';
import Players from '../Players';
import PlayerList from '../PlayerList';
import ResetButton from '../ResetButton';
import RandomSortButton from '../RandomSortButton';
import SkillSortButton from '../SkillSortButton';
import Team1Header from '../TeamHeader/Team1Header';
import Team1 from '../Team/Team1';
import Team2Header from '../TeamHeader/Team2Header';
import Team2 from '../Team/Team2';
import PlayButton from '../PlayButton';
import Match from '../Match';

const App = ({ info, teamsCreated, playersCreated }) => !info ? (
    <div>
        <Header />
        <Settings />
    </div>
) : (
    <div>
    { !teamsCreated ? 
        <div>
            <Header />
            <Players />
            <PlayerList />
            <ResetButton />
            <RandomSortButton />
            <SkillSortButton />

        </div>
    : 
    !playersCreated ?
        <div>
            <Team1Header />
            <Team1 />
            <Team2Header />
            <Team2 />
            <PlayButton />
        </div>
        :
        <div>
            <Match />
        </div> }
    </div>
);


export default App;
