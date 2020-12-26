import Header from '../Header/Header';
import Settings from '../Settings';
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

    </div>
);


export default App;
