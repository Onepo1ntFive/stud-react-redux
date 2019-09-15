import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import ItemStatusFilter from './components/item-status-filter'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

//TODO: end 032

//
const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make awesome APP!', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]

    return (
        <div>
            <AppHeader />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
}

//------------------
ReactDOM.render(<App />, document.getElementById('root'));
