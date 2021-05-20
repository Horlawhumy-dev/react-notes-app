import React, {useContext, useEffect } from 'react';
import {NoteContext} from './NoteContext'
import Note from './Note';
import AddNote from './AddNote'

import '../dist/css/style.css'

const NoteList = () => {
    const [notes, setNotes] = useContext(NoteContext)

    useEffect(() => {
        const notesFromLocal = JSON.parse(localStorage.getItem('notes'))
        setNotes(notesFromLocal);
    },[setNotes])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    const addNewNotes = (newNotes) => {
        const newNote = [...notes, newNotes];
        setNotes(newNote);
    }

    const handleDeleteNote = (id) => {
        const remainingNotes = notes.filter((note) => note.id !== id);
        setNotes(remainingNotes);
    }
    return (
        <div className='NoteList'>
            {notes.map((note) => {
                return(
                    <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote}/>
                )
            })}
            <AddNote addNewNote={addNewNotes}/>
        </div>
    )
}

export default NoteList;