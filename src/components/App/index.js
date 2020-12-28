import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ info, teamsCreated }) => ({
        info,
        teamsCreated
});

export default connect(mapStateToProps)(App);