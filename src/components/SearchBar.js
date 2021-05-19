import React from 'react';
import {MdSearch} from 'react-icons/md';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <MdSearch className="search-icon" size="1.3rem"/>
            <input type='text' placeholder="Type your search" /> 
        </div>
    )
}

export default SearchBar;