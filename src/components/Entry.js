import React from 'react'

const Entry = ({entry, changeEntry, del, dateAdded}) => {
    let textStyle = () => {
        return {
            textDecoration: entry.completed ? 'line-through' : 'none',
        }
    }
    return( 
    <>
        <div className="Entry" style={textStyle()}>
            <div style={{
                marginRight: '2rem',
                borderRight: '1px solid black',
                padding: '1rem',

            }} 
            >
                {`${dateAdded.toLocaleTimeString().slice(0, 5)} ${dateAdded.toLocaleTimeString().slice(8)}`}
            </div>
            <input 
                type='checkbox'
                defaultChecked={entry.completed} 
                onChange={() => changeEntry(dateAdded)}
                className='completedCheckBox' />
            <div 
                style={{
                maxWidth:'10rem',
                wordWrap: 'break-word',
                fontSize: '1.25rem'
            }}
            >
                {entry.text}
            </div>
            <button 
                className='btn-x'
                style={{
                    marginLeft:'auto',
                    order:2,
                    marginRight:'100px'
                }}
                onClick={() => del(dateAdded)}
            >
                x
            </button>
        </div>
    </> )
}

export default Entry;