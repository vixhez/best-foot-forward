import { connect } from 'react-redux';
import Match from './Match';

const mapStateToProps = ({ team1, team2, team1Kit, team2Kit, team1Design, team2Design, team1Banner, team2Banner }) => ({
    team1,
    team2,
    team1Kit,
    team2Kit,
    team1Design,
    team2Design,
    team1Banner,
    team2Banner
});


export default connect(mapStateToProps)(Match);