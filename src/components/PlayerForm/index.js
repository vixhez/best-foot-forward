import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';

const mapStateToProps = ({ playerName, playerNames, playerSkills }) => ({
        playerName,
        playerNames,
        playerSkills,
});


export default connect(mapStateToProps)(PlayerForm);