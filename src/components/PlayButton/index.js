import { connect } from 'react-redux';
import PlayButton from './PlayButton';
import { startMatch } from '../../data/actions';

const mapDispatchToProps = dispatch => {
    return {
        startMatch: () => dispatch(startMatch()),
    }
}

export default connect(null, mapDispatchToProps)(PlayButton);