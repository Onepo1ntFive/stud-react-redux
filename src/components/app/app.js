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
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make awesome APP!'),
            this.createToDoItem('Have a lunch'),
        ],
        search: '',
    }

    // add/del items
    createToDoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxid++,
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1),
            ];

            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createToDoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        })

    };

    // toggle inportant, done
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    // search

    //filter

    render() {

        const { todoData, search } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader
                    toDo={todoCount}
                    done={doneCount}
                />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                    />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}