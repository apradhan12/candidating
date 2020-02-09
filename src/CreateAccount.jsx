import './CreateAccount.css';

/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import { Redirect } from 'react-router-dom';

class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = { redirectToNewPage: false, sliderStates: {} };

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);

		const savedData = {};

		for (const [ key, value ] of data.entries()) {
			savedData[key] = value;
		}

		for (const slider of Object.keys(this.state.sliderStates)) {
			savedData[slider] = this.state.sliderStates[slider];
    }

		localStorage.setItem('userProfile', JSON.stringify(savedData));
		this.setState({ redirectToNewPage: true });
	}

	render() {
		const sliderAttributes = [
			'Economy',
			'Civil Rights',
			'Education',
			'Environment',
			'Foreign Policy',
			'Healthcare',
			'Gun Control'
		];

		const refs = {};
		const sliderAttributeHTML = sliderAttributes.map((name) => {
			refs[name] = React.createRef();
			return (
				<div className="row" key={name}>
					<div className="col-lg-11">
						<label htmlFor={name}>{name}:</label>
            <br />
							<input
                type="range"
                className="App-slider"
								id={name}
								min="0"
								max="10"
								value={this.state.sliderStates[name]}
								onChange={(event) => {
									const newSliderStates = this.state.sliderStates;
									newSliderStates[name] = event.target.value;
									this.setState({ sliderStates: newSliderStates });
									refs[name].current.innerHTML = this.state.sliderStates[name];
								}}
							/>
            <label className="App-slider-label" ref={refs[name]}>0</label>
					</div>
				</div>
			);
    });

    const US_STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL",
                       "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
                       "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
                       "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    const US_STATES_FORM_DATA = US_STATES.map((usState) => (
      <option value={usState}>{usState}</option>
    ));

		if (this.state.redirectToNewPage) {
			return <Redirect to="/matching" />;
    }

		return (
			<div className="container">
				<header>
					<h1 className="App-signup">Sign Up</h1>
					<form className="App-body p-3 rounded" onSubmit={this.onSubmit}>
						<h3>Information</h3>
						<label htmlFor="name" class="m-1">
							Name:
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter your name"
								className="form-control"
							/>
						</label>
						<label htmlFor="city" class="m-1">
							City:
							<input
								type="text"
								name="city"
								id="city"
								placeholder="Enter your city"
								className="form-control"
							/>
						</label>
            <label htmlFor="usState" class="m-1">
							State:
              <select name="state" class="form-control">
                {US_STATES_FORM_DATA}
              </select>
						</label>
						<label htmlFor="zipCode" class="m-1">
							ZIP Code:
							<input
								type="text"
								name="zipCode"
								id="zipCode"
								placeholder="Enter your zip code"
                className="form-control"
                maxLength="5"
							/>
						</label>
						<h3>Policy Importance (0-10)</h3>
						{sliderAttributeHTML}
						<button className="btn btn-primary">Create Profile</button>
					</form>
				</header>
			</div>
		);
	}
}

export default CreateAccount;
