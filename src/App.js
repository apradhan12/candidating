import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Deck from './Deck';
import Matches from './Matches';
import React from 'react';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/">
						<div className="App">
							<h1>Sign In</h1>
							<header className="App-header">
								<form>
									<label>
										Name:
										<input type="text" name="name" />
									</label>
									<input type="submit" value="Submit" />
								</form>
							</header>
						</div>
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
