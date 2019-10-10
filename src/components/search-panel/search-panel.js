import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {

    render() {

        const searchText = 'Search here!';

        return (
            <input
                className="form-control search-input"
                placeholder={searchText}
            />
        )
    }
}
