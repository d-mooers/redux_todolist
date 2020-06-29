import types from './actionTypes';

const addTodo = text => {
    return {
        type: types.ADD_TODO,
        text
    }
}

const deleteTodo = id => {
    return {
        type: types.DELETE_TODO,
        id
    }
}

const toggleTodo = id => {
    return {
        type: types.TOGGLE_TODO,
        id 
    }
}

const setVisibility = setting => {
    return {
        type: types.SET_VISIBILITY,
        setting
    }
}

export {
    addTodo,
    deleteTodo,
    toggleTodo,
    setVisibility
}