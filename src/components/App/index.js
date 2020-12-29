import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ info, teamsCreated, playersCreated }) => ({
        info,
        teamsCreated,
        playersCreated
});

export default connect(mapStateToProps)(App);