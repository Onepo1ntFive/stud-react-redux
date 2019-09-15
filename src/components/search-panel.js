import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'Search here!';
    const searchStyle = {
        fontSize: '16px'
    }
    return (
        <input
            className="form-control search-input"
            style={searchStyle}
            placeholder={searchText}
        />
    );
};

export default SearchPanel;