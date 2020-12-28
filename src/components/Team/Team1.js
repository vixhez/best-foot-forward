import { connect } from 'react-redux';
import Team from './Team';

const mapStateToProps = ({ team1 }) => ({
    team: team1,
});

export default connect(mapStateToProps)(Team);