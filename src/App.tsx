import React from 'react';
import './App.css';
import Header from './header';
import BowlingList from './Bowling/BowlingList';

function App() {
  return (
    <div className="App">
      <Header title="Bowling League Teams" />
      <BowlingList />
    </div>
  );
}

export default App;
