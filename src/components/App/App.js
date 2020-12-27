import Header from '../Header/Header';
import Settings from '../Settings';
import Players from '../Players';
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

    </div>
);


export default App;
