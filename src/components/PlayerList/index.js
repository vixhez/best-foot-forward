import { connect } from 'react-redux';
import PlayerList from './PlayerList';

const mapStateToProps = ({ playersArray, players }) => ({
    playersArray,
    players,
});

export default connect(mapStateToProps)(PlayerList);