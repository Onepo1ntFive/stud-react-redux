import React, { Component } from 'react';
import './app.css'

import AppHeader from '../app-header'
import ItemStatusFilter from '../item-status-filter'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'

export default class App extends Component {

    maxid = 100;

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make awesome APP!', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxid++
        };

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        })

    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}