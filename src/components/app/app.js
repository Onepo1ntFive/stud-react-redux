import React from 'react';
import './app.css'

import AppHeader from '../app-header'
import ItemStatusFilter from '../item-status-filter'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make awesome APP!', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]

    return (
        <div className="todo-app">
            <AppHeader />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
}

export default App;