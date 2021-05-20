import React, { useState, useContext } from 'react';
import {MdSearch} from 'react-icons/md';
import { NoteContext } from './NoteContext';

import '../dist/css/style.css'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('')
    
    const [notes, setNotes] = useContext(NoteContext);

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
        const searchNote = notes.filter(note => {
            const lowerCaseNote = note.text.toLowerCase()
            return lowerCaseNote.includes(searchText.toLowerCase())
        })
        setNotes(searchNote);   
    }
     
    return (
        <div className="SearchBar">
            <MdSearch 
                className="search-icon"
                size="1.2em"
            /> 
            <input 
                type='text' 
                placeholder="Type your search" 
                onChange={handleSearchText} 
                value={searchText} 
            />
            
        </div>
    )
}

export default SearchBar;