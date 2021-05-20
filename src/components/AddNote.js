import React, { useState } from 'react';

import '../dist/css/style.css'

const AddNote = ({addNewNote }) => {
    const [noteText, setNoteText] = (useState(''))
    const id = Math.floor(Math.random() * 1000)
    const currentDate = new Date();
    const totalCharacters = 300;
    const totalText = noteText.toLowerCase().length;

    const handleChangeText = (e) => {
        if(totalCharacters - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    const handleNoteText = () => {
        const newNote = {
            id: id,
            text: noteText,
            date: currentDate.toLocaleDateString()
        }

        if(noteText.trim().length > 0 ){
            // Adding user typed note
            addNewNote(newNote);
            setNoteText('')
        }else{
            alert('Note text area is empty')
        }
       
    }
    return (
        <div className='AddNote'>
            <textarea 
                placeholder="Type your note here...."
                onChange = {handleChangeText} 
                value={noteText}
                rows='7' columns='50'>
            </textarea>
            <div className="bottom">
                <span>{totalCharacters - totalText} Remaining</span>
                <button onClick={handleNoteText}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;