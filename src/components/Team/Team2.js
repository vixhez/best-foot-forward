import { connect } from 'react-redux';
import Team from './Team';

const mapStateToProps = ({ team2 }) => ({
    team: team2,
});

export default connect(mapStateToProps)(Team);