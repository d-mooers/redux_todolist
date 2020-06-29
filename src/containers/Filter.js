import React from 'react';
import {connect} from 'react-redux';
import FilterTodos from '../components/FilterTodos';
import {setVisibility} from '../actions/todo';

const mapDispatchToProps = dispatch => ({
    changeFilter: setting => dispatch(setVisibility(setting))
});

export default connect(
    null,
    mapDispatchToProps
)(FilterTodos);