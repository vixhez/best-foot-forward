import { connect } from 'react-redux';
import MatchTeam from './MatchTeam';

const mapStateToProps = ({ team2 }) => ({
    team: team2,
});

export default connect(mapStateToProps)(MatchTeam);