import { connect } from 'react-redux';
import TeamHeader from './TeamHeader';

const mapStateToProps = ({ team2Name }) => ({
    teamName: team2Name,
});

export default connect(mapStateToProps)(TeamHeader);