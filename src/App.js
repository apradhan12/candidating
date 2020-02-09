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
				<nav className="navbar navbar-light">Candidating</nav>
				<Switch>
					<Route exact path="/">
						<div className="App">
							<h1>
								<b>Sign In</b>
							</h1>
							<header className="App-header">
								<form>
									<label>
										Name:
										<input type="text" name="name" />
									</label>
									<p />
									<label>
										ZIP Code:
										<input type="text" name="name" />
									</label>
									<p />
									<button className="App-button">
										<Link to="/matching">
											<button className="btn btn-primary">Create Account</button>
										</Link>
									</button>
								</form>
							</header>
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
