import React from 'react';

import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//import { render } from '@testing-library/react';

function App() {
  
    return (
      <div className="Candidating">
        
        <header className="App-header">
        <h1>Candidating</h1>
          
          <SignUpButton/>
          <SignInButton />

          <Router>
            <div>
              <Switch>
                
              </Switch>
            </div>
          </Router>


        </header>
      </div>
    );
}

export default App;
