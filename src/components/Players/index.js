import { connect } from 'react-redux';
import Players from './Players';
import PlayerForm from '../PlayerForm';
import { playerDetailsCompleted } from '../../data/actions';

const mapStateToProps = ({ playerName, playerNames, amountPlayers, playerSkills }) => ({
        playerName,
        playerNames,
        amountPlayers,
        playerSkills,
});

const mapDispatchToProps = dispatch => {
    return {
        playerDetailsCompleted: data => dispatch(playerDetailsCompleted(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);