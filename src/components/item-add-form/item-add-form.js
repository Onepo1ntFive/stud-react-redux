import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.label !== '') {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form 
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}  
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done?"
                    value={this.state.label}
                    onChange={this.onLabelChange}
                />
                <button
                    className="btn btn-outline-secondary"
                >
                    Add                
                </button>
            </form>
        )
    }
}
