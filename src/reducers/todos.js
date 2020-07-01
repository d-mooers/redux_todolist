import types from '../actions/actionTypes';

/* const initialState = {
    visibilityFilter: types.VISIBILITY_FILTERS.SHOW_ALL,
    todos: []
}
 */
const todos = (state=[], action) => {
    switch (action.type) {
        case types.ADD_TODO:
            const date = new Date();
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    dateAdded: date
                }
            ]
        case types.TOGGLE_TODO:
            return state.map(entry => {
                if (entry.dateAdded === action.dateAdded) 
                    return Object.assign({}, entry, {
                        completed: !entry.completed
                    });
                return entry;
            })
        case types.DELETE_TODO:
            return state.filter(entry => entry.dateAdded !== action.dateAdded);

        default:
            return state;
    }
}

/* function todoApp(state=initialState, action) {
    switch (action.type) {
        case types.SET_VISIBILITY :
            return Object.assign({}, state, {
                visibilityFilter: action.setting
            });

        case types.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                        id: uuid()
                    }
                ]
            })
        
        case types.DELETE_TODO :
            return Object.assign({}, state, {
                todos: state.todos.map(entry => {
                    if (entry.id === action.id) {
                        return Object.assign({}, entry, {
                            completed: !entry.completed
                        });
                    }
                    return entry;
                })
            })
        
        case types.DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(e => e.id !== action.id)
            });
        
        default:
            return state;
    }
}

export default combineReducers({todoApp}); */

export default todos;