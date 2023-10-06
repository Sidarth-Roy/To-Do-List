import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import TasksList from './TasksList';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newText, setNewText] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if(todos.length > 0)
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
      <Header />
      <Input todos={todos} setTodos={setTodos} />
      <TasksList todos={todos} setTodos={setTodos} setEditingIndex={setEditingIndex} setNewText={setNewText} editingIndex={editingIndex} newText={newText} />
    </div>
  );
};

export default TodoList;