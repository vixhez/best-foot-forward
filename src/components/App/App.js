import Header from '../Header/Header';

import Settings from '../Settings';
import SettingsInstructions from '../SettingsInstructions/SettingsInstructions';

import Players from '../Players';
import PlayerList from '../PlayerList';
import ConfirmPlayersWarning from '../ConfirmPlayersWarning';
import ResetButton from '../ResetButton';
import RandomSortButton from '../RandomSortButton';
import SkillSortButton from '../SkillSortButton';
import PlayersInstructions from '../PlayersInstructions/PlayersInstructions'

import Team1Header from '../TeamHeader/Team1Header';
import Team1 from '../Team/Team1';
import Team2Header from '../TeamHeader/Team2Header';
import Team2 from '../Team/Team2';
import PlayButton from '../PlayButton';
import BackOneButton from '../BackOneButton';

import Match from '../Match';

const App = ({ info, teamsCreated, playersCreated }) => !info ? (
    <div className='landingPage'>
        <main>
            <Header />
            <Settings />
        </main>

        <aside>
            <SettingsInstructions />
        </aside>
    </div>
) : (
    <div>
    { !teamsCreated ? 
        <div className='playerForm'>
            <main>
                <Header />
                <Players />
                <ConfirmPlayersWarning />
                <div className='randomSkillButtonsParent'>
                    <RandomSortButton />
                    <SkillSortButton />
                </div>
                <div className='resetButtonParent'>
                    <ResetButton />
                </div>
            </main>

            <aside>
            <PlayerList />
            {/* <hr className='playerListHr' /> */}
            <PlayersInstructions />
            </aside>
        </div>
    : 
    !playersCreated ?
        <div className='playersConfirm'>
            <Header />
            <Team1Header />
            <Team1 />
            <Team2Header />
            <Team2 />
            <PlayButton />
            <BackOneButton />
            <ResetButton />
        </div>
        :
        <div className='match'>
            <Match />
        </div> }
    </div>
);


export default App;
