import todos from './todos';
import visbilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    todos,
    visbilityFilter
});

export default todoApp;