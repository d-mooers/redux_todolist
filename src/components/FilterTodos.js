import React from 'react';
import { VISIBILITY_FILTERS } from '../actions/actionTypes';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VISIBILITY_FILTERS;

const FilterTodos = ({changeFilter, visibilityFilter}) => {

    const buttonStyle = filter => {
            return {
                backgroundColor: filter === visibilityFilter ? '#ABB2B9' : '#D5D8DC ',
                borderStyle: filter === visibilityFilter ? 'inset' : 'outset',
            }
    }

    return (
        <div style={{display:'flex', justifyContent:'center', paddingTop:'10px'}} >
            <ButtonGroup aria-label="Group of buttons to filter todos">
                <button className='filterBtn' style={buttonStyle(SHOW_ALL)} onClick={() => changeFilter(SHOW_ALL)}>
                    All
                </button>
                <button className='filterBtn' style={buttonStyle(SHOW_ACTIVE)} onClick={() => changeFilter(SHOW_ACTIVE)}>
                    Active
                </button>
                <button className='filterBtn' style={buttonStyle(SHOW_COMPLETED)} onClick={() => changeFilter(SHOW_COMPLETED)}>
                    Completed
                </button>
            </ButtonGroup>
        </div>
    )
}

export default FilterTodos;