import React from 'react'
import Button from 'react-bootstrap/Button'

const Entry = ({entry, changeEntry, del, id}) => {
    let textStyle = () => {
        return {
            textDecoration: entry.completed ? 'line-through' : 'none'
        }
    }
    return( 
    <>
        <p className="Entry" style={textStyle()}>
            <input 
                type='checkbox'
                defaultChecked={entry.completed} 
                onChange={() => changeEntry(id)} />
            {entry.text}
            <button 
                className='btn-x'
                style={{
                    marginLeft:'auto',
                    order:2,
                    marginRight:'100px'
                }}
                onClick={() => del(id)}
            >
                x
            </button>
        </p>
    </> )
}

export default Entry;