import types from './actionTypes';

const addTodo = text => {
    return {
        type: types.ADD_TODO,
        text
    }
}

const deleteTodo = dateAdded => {
    return {
        type: types.DELETE_TODO,
        dateAdded
    }
}

const toggleTodo = dateAdded => {
    return {
        type: types.TOGGLE_TODO,
        dateAdded 
    }
}

const setVisibility = filter => {
    return {
        type: types.SET_VISIBILITY,
        filter
    }
}

export {
    addTodo,
    deleteTodo,
    toggleTodo,
    setVisibility
}