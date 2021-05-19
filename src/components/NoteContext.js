import React, { useState, createContext } from 'react';


export const NoteContext = createContext();

export const NoteProvider = (props) => {
    const [notes, setNotes] = (useState([
        {
            id: 1,
            text: 'This is the first note!!',
            date: '19/05/2021'
        },
        {
            id: 2,
            text: 'This is the second note!!',
            date: '18/05/2021'
        },
        {
            id: 3,
            text: 'This is the third note!!',
            date: '17/05/2021'
        },
        {
            id: 4,
            text: 'This is the fourth note!!',
            date: '16/05/2021'
        },
        {
            id: 5,
            text: 'This is the fifth note!!',
            date: '15/05/2021'
        },
    ]))

    return (
        <NoteContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NoteContext.Provider>
    ) 
}