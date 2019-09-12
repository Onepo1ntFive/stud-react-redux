import React from 'react';

const SearchPanel = () => {
    const searchText = 'Search here!';
    const searchStyle = {
        fontSize: '16px'
    }
    return (
        <input style={searchStyle} placeholder={searchText} />
    );
};

export default SearchPanel;