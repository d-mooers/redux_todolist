import React, { useState } from 'react';

const AddTodo = ({onSubmit}) => {
    let [textField, updateTextField] = useState("");
    let onChange = event => {
        updateTextField(event.target.value);
    }
    let handleSubmit = e => {
        e.preventDefault();
        console.log('Hello');
        if (textField !== "") {
            onSubmit(textField);
            updateTextField("");
        }     
    }

    return (
        <form onSubmit={e => handleSubmit(e)} style={{display:'flex'}} >
            <input 
                type='text'
                value={textField} 
                onChange={onChange}
                placeholder='Add a new item...'
                style={{flex:'2', padding:'5px'}}
            />
            <input 
                type='submit' 
                name='submit' 
                style={{cursor:'pointer', marginRight:'10px'}} /> 
        </form>
    )
}

export default AddTodo;