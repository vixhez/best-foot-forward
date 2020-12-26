import Header from '../Header/Header';
import Settings from '../Settings';

const App = ({ info }) => !info ? (
    <div>
        <Header />
        <Settings />
    </div>
) : (
    <div>
        <Header />

    </div>
);


export default App;
