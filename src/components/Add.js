import React, { useState } from 'react';

const MAX_LEN = 175;

const AddTodo = ({onSubmit}) => {
    let [textField, updateTextField] = useState("");
    let onChange = event => {
        updateTextField(event.target.value);
    }
    let handleSubmit = e => {
        e.preventDefault();
        if (textField.trim() !== "" && textField.length <= MAX_LEN) {
            onSubmit(textField);
            updateTextField("");
        }     
    }
    let EntryLengthCheck = () => {
        if (textField.length > MAX_LEN) {
            return (
                <p style={{color:'red', maxHeight:'1rem'}} > 
                    Please limit your entry to at most 175 characters
                </p>
            )
        }
        return null;
    }

    return (
    <>
        <form onSubmit={e => handleSubmit(e)} style={{display:'flex', margin:'1rem'}} >
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
                style={{cursor:'pointer'}} /> 
        </form>
        <EntryLengthCheck />
    </>
    )
}

export default AddTodo;