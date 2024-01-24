// src/components/Todo.js
import React from 'react';
import TodoAddItems from './TodoAddItems';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className="container mx-auto mt-8">
      <TodoAddItems />
      <TodoList />
    </div>
  );
};

export default Todo;
