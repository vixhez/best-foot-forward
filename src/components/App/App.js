import Header from '../Header/Header';
import Settings from '../Settings';
import Players from '../Players';
import PlayerList from '../PlayerList';
import ResetButton from '../ResetButton';
import RandomSortButton from '../RandomSortButton';
import SkillSortButton from '../SkillSortButton';
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
            {/* <SkillSortButton /> */}

        </div>
        : 
        <div>
            <Match />
        </div> }
    </div>
);


export default App;
