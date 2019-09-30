import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button
                onClick={() => this.props.onItemAdded('Hello world!')}
                    type="button"
                    className="btn btn-outline-secondary"
                >
                    <i className="fa fa-plus-circle"></i> Add Item
                </button>
            </div>
        )
    }
}
