import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    }

    onInputChange = (event) => {
        const { onSearchChange = () => {} } = this.props;

        this.setState({
            searchText: event.target.value
        })

        onSearchChange(event.target.value);
    }

    render() {

        const searchText = 'Search here!';

        return (
            <input
                className="form-control search-input"
                placeholder={searchText}
                value={this.state.searchText}
                onChange={this.onInputChange}
            />
        )
    }
}
