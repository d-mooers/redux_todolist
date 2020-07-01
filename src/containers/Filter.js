import {connect} from 'react-redux';
import FilterTodos from '../components/FilterTodos';
import {setVisibility} from '../actions/todo';

const mapDispatchToProps = dispatch => ({
    changeFilter: filter => dispatch(setVisibility(filter))
});

const mapStateToProps = state => ({
    visibilityFilter: state.visibilityFilter
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterTodos);