import { connect } from 'react-redux';
import ConfirmPlayersWarning from './ConfirmPlayersWarning';

const mapStateToProps = ({ teamsCreated }) => ({
    teamsCreated,
});


export default connect(mapStateToProps)(ConfirmPlayersWarning);