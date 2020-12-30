import { connect } from 'react-redux';
import MatchTeam from './MatchTeam';

const mapStateToProps = ({ team2, team2Kit, team2Design }) => ({
    team: team2,
    teamKit: team2Kit,
    teamDesign: team2Design,
});

export default connect(mapStateToProps)(MatchTeam);