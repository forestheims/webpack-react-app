import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../../slices/todosSlice.js';

const TodosComponent = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(
        addTodo({
          id: Math.random(), // Use more appropriate id generation for production
          text: newTodo,
          completed: false,
        })
      );
      setNewTodo('');
    }
  };

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div>
      <h2>Todos</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosComponent;
