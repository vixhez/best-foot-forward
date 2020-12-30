import { connect } from 'react-redux';
import MatchTeam from './MatchTeam';

const mapStateToProps = ({ team1, team1Kit, team1Design }) => ({
    team: team1,
    teamKit: team1Kit,
    teamDesign: team1Design,
});

export default connect(mapStateToProps)(MatchTeam);