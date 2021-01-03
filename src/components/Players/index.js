import { connect } from 'react-redux';
import Players from './Players';
import { playerDetailsCompleted } from '../../data/actions';

const mapStateToProps = ({ players, amountPlayers }) => ({
    players,
    amountPlayers,

});

const mapDispatchToProps = dispatch => {
    return {
        playerDetailsCompleted: data => dispatch(playerDetailsCompleted(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);