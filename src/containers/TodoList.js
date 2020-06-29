import React from 'react';
import Entries from '../components/Entries';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/todo'

const mapStateToProps = state => ({
    entries: state.todos
})

const mapDispatchToProps = dispatch => ({
    changeEntry: id => dispatch(toggleTodo(id)),
    delete: id => dispatch(deleteTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entries);

