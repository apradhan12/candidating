import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Deck from './Deck';
import Matches from './Matches';
import React from 'react';
import SignIn from './SignIn';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/signin">
						<SignIn />
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
