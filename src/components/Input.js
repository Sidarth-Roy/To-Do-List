import React, { useState } from 'react';

export default function Input({ todos, setTodos }) {
    const [todoText, setTodoText] = useState('');
    const addTodo = () => {
        if (todoText.trim() === '') return;
        const newTodo = {
            text: todoText,
            completed: false,
            date: new Date().toLocaleDateString(),
        };
        setTodos([...todos, newTodo]);
        setTodoText('');
    };
    return <div className="mt-4 flex">
        <input
            type="text"
            className="w-full border rounded py-2 px-3"
            placeholder="Add a new to-do"
            value={todoText}                                    //used for consistency btw the input and the state
            onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="mt-2 ml-3 rounded" onClick={addTodo}>
            <i class="fa fa-2x color-blue fa-plus-circle" aria-hidden="true" />
        </button>
    </div>;
}