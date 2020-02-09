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
				<nav className="navbar navbar-light">
					<b>
						Candidating{' '}
						<span role="img" aria-label="heart" aria-labelledby="heart">
							❤️
						</span>
					</b>
				</nav>
				<Switch>
					<Route exact path="/">
						<div className="App">
							<Link to="/createaccount">
								<button className="btn btn-primary m-1">Sign Up</button>
							</Link>
							<Link to="/createaccount">
								<button className="btn btn-primary m-1">Sign In</button>
							</Link>
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
