import './App.css';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CreateAccount from './CreateAccount';
import Deck from './Deck';
import Matches from './Matches';
import React from 'react';

function App() {
	return (
	  <Router>
		<div>
		  <Switch>
      <nav className="navbar navbar-light">Candidating</nav>
			<Route exact path="/">
			  <div className="App">
				  <h1><b>Candidating</b></h1>
				  <button className = "App-button">
					<Link to="/createaccount">
					  <button className="btn btn-primary">Sign Up</button>
					</Link>
				  </button>
				  <button className = "App-button">
					<Link to="/createaccount">
					  <button className="btn btn-primary">Sign In</button>
					</Link>
				  </button>
			  </div>
			</Route>
      		<Route path="/createaccount">
				<CreateAccount />
			</Route>
			<Route path="/matching">
				<Deck />
			</Route>
			<Route path="/matches" component={Matches} />
		  </Switch>
		</div>
		</Router>
	);
}

export default App;
