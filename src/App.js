import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <header className="App-header">
        <form>
          <label>
            Name:
            <input type="text" name="Name" />
          </label>
          <label>
            Zip Code:
            <input type="text" name = "Zip Code" />
          </label>
        </form>
        <input type="submit" value="Submit" />
      </header>
    </div>
  );
}

export default App;
