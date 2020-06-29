import React from 'react';
import { connect } from 'react-redux';
import Add from '../components/Add';
import {addTodo} from '../actions/todo'

const mapDispatchToProps = dispatch => ({
    onSubmit: text => dispatch(addTodo(text))
})

export default connect(
    null,
    mapDispatchToProps
)(Add)
