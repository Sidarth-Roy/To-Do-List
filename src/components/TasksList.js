import React, { useState } from 'react';

import Filter from './Filter';
import TaskCard from './TaskCard';
export default function TasksList({ todos, setTodos, setEditingIndex, setNewText, editingIndex, newText }) {
    const [filter, setFilter] = useState('all');

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };
// 
    const startEdit = (index) => {
        setEditingIndex(index);
        setNewText(todos[index].text);
    };
// 
    const saveEdit = (index) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
        setEditingIndex(null);
    };

    const cancelEdit = () => {
        setEditingIndex(null);
    };
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active')
            return !todo.completed;
        else if (filter === 'completed')
            return todo.completed;
        else
            return true;
    });
    return (<div className="mt-2">
        <Filter filter={filter} setFilter={setFilter} />
        <ul className="mt-4">
            {filteredTodos.map((todo, index) => <TaskCard key={index} index={index} todo={todo} editingIndex={editingIndex} newText={newText} setNewText={setNewText} removeTodo={removeTodo} toggleComplete={toggleComplete} startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} />)}
        </ul>
    </div>);
}