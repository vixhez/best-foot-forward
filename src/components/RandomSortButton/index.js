import { connect } from 'react-redux';
import RandomSortButton from './RandomSortButton';
import { sortRandomly } from '../../data/actions';

const mapDispatchToProps = dispatch => {
    return {
        sortRandomly: () => dispatch(sortRandomly()),
    }
}

export default connect(null, mapDispatchToProps)(RandomSortButton);