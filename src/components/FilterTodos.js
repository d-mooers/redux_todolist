import React from 'react';
import { VISIBILITY_FILTERS } from '../actions/actionTypes';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VISIBILITY_FILTERS;

const FilterTodos = ({changeFilter}) => {
    return (
        <ButtonGroup aria-label="Group of buttons to filter todos">
            <Button variant='secondary' onClick={() => changeFilter(SHOW_ALL)}>
                All
            </Button>
            <Button variant='secondary' onClick={() => changeFilter(SHOW_ACTIVE)}>
                Active
            </Button>
            <Button variant='secondary' onClick={() => changeFilter(SHOW_COMPLETED)}>
                Completed
            </Button>
        </ButtonGroup>
    )
}

export default FilterTodos;