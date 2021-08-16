import React from 'react';
import { PropTypes }from 'prop-types'

function TodoList({ tasks }) {
  return (
    <div>
      <h1>To-do:</h1>
      <ul>
        { tasks.map((item, index) => <li key={index}>{item}</li>) }
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;