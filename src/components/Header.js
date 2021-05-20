import React from  'react';
import {FaMoon} from 'react-icons/fa';

import '../dist/css/style.css';


const  Header = ({ handleShowDarkMode }) => {
    return (
        <div className="Header" >
            <h1>Notes App</h1>
            <button onClick={handleShowDarkMode}>
                <FaMoon />
                Mode
            </button>
        </div>
    )
}


export default Header;