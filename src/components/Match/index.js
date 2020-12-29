import { connect } from 'react-redux';
import Match from './Match';

const mapStateToProps = ({ team1, team2, team1Kit, team2Kit }) => ({
    team1,
    team2,
    team1Kit,
    team2Kit
});


export default connect(mapStateToProps)(Match);