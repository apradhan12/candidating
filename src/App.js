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
					<Route path="/matching">
						<Deck />
					</Route>
					<Route path="/matches" component={Matches}>
						{/* <Matches matches={matches} /> */}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
