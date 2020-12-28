import { connect } from 'react-redux';
import SkillSortButton from './SkillSortButton';
import { sortBySkills } from '../../data/actions';

const mapDispatchToProps = dispatch => {
    return {
        sortBySkills: () => dispatch(sortBySkills()),
    }
}

export default connect(null, mapDispatchToProps)(SkillSortButton);