import React, {useState} from 'react';
import {NoteProvider} from './components/NoteContext'
import NoteList from './components/NoteList'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

const App = () => {
  const [showDarkMode, setShowDarkMode] = useState(false);

  const showDark = () =>{
    setShowDarkMode(!showDarkMode)
    console.log(showDarkMode)
  }
   return (
     <NoteProvider>
        <div className={showDarkMode ? 'dark-mode' : ''}>
            <div className="container">
              <Header handleShowDarkMode={showDark} />
              <SearchBar />
              <NoteList />
            </div>
        </div>
     </NoteProvider>
   )
}


export default App;