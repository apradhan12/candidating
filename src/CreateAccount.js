import React from 'react';
import './CreateAccount.css';

function App() {
  return (
    <div className="App-header">
      
      <header>
        <h1>Sign Up</h1>
        <form className="App-body">
            <h3>Information</h3>
            <label >
                Name:
                <input type="text" name="Name" />
            </label>
            <p/>
            <label>
                ZIP Code:
                <input type="text" name = "Zip Code" />
            </label>
            <h3>Policy Importance (0-10)</h3>
            <label>
                Sustainability:
                <input type="number" name = "Sustainability" />
            </label>
            <p/>
            <label>
                Healthcare:
                <input type="number" name = "Healthcare" /> 
            </label>
            <p/>
            <label>
                Education:
                <input type="number" name = "Education" /> 
            </label>
            <p/>
            <label>
                Gun Reform:
                <input type="number" name = "Gun Reform" /> 
            </label>
            <p/>
            <label>
                Student Debt:
                <input type="number" name = "Student Deb" /> 
            </label>
            <p/>
            <label>
                Abortion:
                <input type="number" name = "Abortion" /> 
            </label>
        </form>
        <input className="App-button" type="submit" value="Create Profile" />
      </header>
    </div>
  );
}

export default App;
