import { connect } from 'react-redux';
import ResetButton from './ResetButton';
import { playersReset } from "../../data/actions";

const mapDispatchToProps = dispatch => ({
        playersReset: () => dispatch(playersReset())
});

export default connect(null, mapDispatchToProps)(ResetButton);