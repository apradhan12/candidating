import React from 'react';

import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton.js';
import './App.css';

//import { render } from '@testing-library/react';

function App() {
  
    return (
      <div className="Candidating">
        
        <header className="App-header">
        <h1>Candidating</h1>
          
          <SignUpButton />
           
            
            
            <SignInButton />
            
            
        
        </header>
      </div>
    );
}




export default App;
