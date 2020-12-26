import { connect } from 'react-redux';
import Settings from './Settings';
import { settingsCompleted } from '../../data/actions';

const mapStateToProps = ({ info, team1Name, team2Name }) => ({
        info,
        team1Name,
        team2Name
});

const mapDispatchToProps = dispatch => {
    return {
        settingsCompleted: data => dispatch(settingsCompleted(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);