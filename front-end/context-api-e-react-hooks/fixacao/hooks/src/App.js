import React from 'react';
import useTimer from './useTimer';
import './App.css'

function App() {
  const {randomNumber, mutiple } = useTimer();

  return (
    <div className="App">
      {' '}
      {randomNumber}
      {' '}
      {mutiple ? 'Acerto' : ''}
    </div>
  );
}

export default App;
