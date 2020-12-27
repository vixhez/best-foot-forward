import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { playerAdded } from '../../data/actions';

const mapStateToProps = ({ players, playersArray }) => ({
        players,
        playersArray
});

const mapDispatchToProps = dispatch => {
    return {
        playerAdded: data => dispatch(playerAdded(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);