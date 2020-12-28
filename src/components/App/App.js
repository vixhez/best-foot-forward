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
import Match from '../Match';
// import StartGameButton from '../StartGameButton';

const App = ({ info, teamsCreated }) => !info ? (
    <div>
        <Header />
        <Settings />
        {/* <StartGameButton /> */}
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
        <div>
            <Team1Header />
            <Team1 />
            <Team2Header />
            <Team2 />
            {/* <Match /> */}
        </div> }
    </div>
);


export default App;
