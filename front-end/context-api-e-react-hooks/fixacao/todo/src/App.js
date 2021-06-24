import React, { useState } from 'react';
import useHook from './hooks/useHook';
import TodoList from './TodoList';
import './App.css'

function App() {
  const [newTask, setNewTask] = useState('');
  const { todos, addTodos } = useHook()

  const handleChange = ({ target }) => {
    setNewTask(target.value)
  }

  const handleClick = () => {
    addTodos(newTask);
    setNewTask('')
  }

  return (
    <div className="App">
      <label htmlFor="task">
        <input
        id="task"
        placeholder="task"
        name="newItem"
        value={newTask}
        onChange={handleChange}
        />
      </label>
      <button type="button" onClick={ () => handleClick( ) }>Add Task</button>
      <TodoList tasks={todos} />
    </div>
  );
}

export default App;
