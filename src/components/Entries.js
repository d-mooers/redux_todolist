import React from 'react';
import Entry from './Entry'

const Entries = props => {
    const entryJSX = props.entries.map(e => (
        <Entry 
            entry={e} 
            key={e.dateAdded} 
            dateAdded={e.dateAdded} 
            changeEntry={props.changeEntry}
            del={props.delete}
        />
    ))

    return (
        <div>
            {entryJSX}
        </div>
    );
}

export default Entries;