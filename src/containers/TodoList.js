import React from 'react';
import Entries from '../components/Entries';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/todo';
import { VISIBILITY_FILTERS } from '../actions/actionTypes';

const {SHOW_COMPLETED, SHOW_ACTIVE} = VISIBILITY_FILTERS;

const filter = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case SHOW_COMPLETED :
            return todos.filter(todo => todo.completed);
        case SHOW_ACTIVE :
            return todos.filter(todo => ! todo.completed);
        default :
            return todos;
    }
}

const mapStateToProps = state => ({
    entries: filter(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    changeEntry: id => dispatch(toggleTodo(id)),
    delete: id => dispatch(deleteTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entries);

