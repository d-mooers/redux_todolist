import { VISIBILITY_FILTERS, SET_VISIBILITY } from '../actions/actionTypes'

const visibilityFilter = (state=VISIBILITY_FILTERS.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;