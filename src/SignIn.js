import React from 'react';

class SignIn extends React.Component {
	render() {
		return (
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
		);
	}
}

export default SignIn;
