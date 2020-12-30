import { connect } from 'react-redux';
import MatchTeam from './MatchTeam';

const mapStateToProps = ({ team1 }) => ({
    team: team1,
});

export default connect(mapStateToProps)(MatchTeam);