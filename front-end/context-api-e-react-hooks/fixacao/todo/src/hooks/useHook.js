import { useState } from 'react';

function useHook() {
  const [todos, setTodos] = useState([]);

  const addTodos = (userInput) => {
    setTodos(todos.concat(userInput));
  };

  return {
    todos,
    addTodos,
  };
};

export default useHook;