import { connect } from 'react-redux';
import TeamHeader from './TeamHeader';

const mapStateToProps = ({ team1Name }) => ({
    teamName: team1Name,
});

export default connect(mapStateToProps)(TeamHeader);