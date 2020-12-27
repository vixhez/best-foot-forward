import Header from '../Header/Header';
import Settings from '../Settings';
import Players from '../Players';
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
        <ResetButton />

    </div>
);


export default App;
