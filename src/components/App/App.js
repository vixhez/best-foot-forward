import Header from '../Header/Header';
import Settings from '../Settings';
import Players from '../Players';
import PlayerList from '../PlayerList';
import ResetButton from '../ResetButton';
// import StartGameButton from '../StartGameButton';

const App = ({ info }) => !info ? (
    <div>
        <Header />
        <Settings />
        {/* <StartGameButton /> */}
    </div>
) : (
    <div>
        <Header />
        <Players />
        <PlayerList />
        <ResetButton />

    </div>
);


export default App;
