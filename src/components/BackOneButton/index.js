import { connect } from 'react-redux';
import BackOneButton from './BackOneButton';
import { backOneStep } from "../../data/actions";

const mapDispatchToProps = dispatch => ({
        backOneStep: () => dispatch(backOneStep())
});

export default connect(null, mapDispatchToProps)(BackOneButton);