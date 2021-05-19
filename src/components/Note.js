import React, {useContext} from 'react';
// import {NoteContext} from './NoteContext'
import { MdDelete } from "react-icons/md";

import '../dist/css/style.css'


const Note = ( { note, handleDeleteNote }) => {

    // const [notes, setNotes] = useContext(NoteContext);

   
    return (
      
        <div className='Note'>
            <div className="upper">
                <h4>{note.text}</h4>
            </div>
            <div className="bottom">
                <p>{note.date}</p>
                <MdDelete onClick={() => handleDeleteNote(note.id)} className="delete-icon" size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;