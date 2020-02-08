import React from 'react';
import './CreateAccount.css';
import { Dropdown } from 'reactstrap';

function App() {
  return (
    <div className="App-header">
      
      <header>
        <h1>Sign Up</h1>
        <form className="App-body">
            <h3>Personal Information</h3>
            <label >
                Name:
                <input type="text" name="Name" placeholder = "Enter your name" />
            </label>
            <p/>
            <label>
                ZIP Code:
                <input type="text" name = "Zip Code" placeholder = "Enter your zip code"/>
            </label>
            <h3>Policy Importance (1-10)</h3>
            <label>
                Sustainability:
                <input type="number" name = "Sustainability" placeholder="Rank from 1-10"/>
            </label>
            <p/>
            <label>
                Healthcare:
                <input type="number" name = "Healthcare" placeholder="Rank from 1-10"/> 
            </label>
            <p/>
            <label>
                Education:
                <input type="number" name = "Education" placeholder="Rank from 1-10"/> 
            </label>
            <p/>
            <label>
                Gun Control:
                <input type="number" name = "Gun Control" placeholder="Rank from 1-10"/> 
            </label>
            <p/>
            <label>
                Student Debt:
                <input type="number" name = "Student Debt" placeholder="Rank from 1-10"/> 
            </label>
            <p/>
            <label>
                Abortion:
                <input type="number" name = "Abortion"placeholder="Rank from 1-10"/> 
            </label>
            <p/>
            <label>
                Net Neutrality:
                <input type="number" name = "Net Neutrality"placeholder="Rank from 1-10"/> 
            </label>
        </form>
        <input className="App-button" type="submit" value="Create Profile" />
      </header>
    </div>
  );
}

export default App;
