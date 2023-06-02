import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Calculadora</h1>
        <Calculator />
      </header>
      <footer className="footer">
        Desarrollado por Mario Berni
      </footer>
    </div>
  );
}

export default App;
