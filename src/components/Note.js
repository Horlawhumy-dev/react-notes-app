import React from 'react';
import { MdDelete } from "react-icons/md";

import '../dist/css/style.css'


const Note = ( { note, handleDeleteNote }) => {

    return (
      
        <div className='Note'>
            <div className="upper">
                <p>{note.text}</p>
            </div>
            <div className="bottom">
                <p>{note.date}</p>
                <MdDelete onClick={() => handleDeleteNote(note.id)} className="delete-icon" size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;