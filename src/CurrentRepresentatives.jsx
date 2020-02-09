import React from 'react';

function CurrentRepresentatives() {
  const electionData = {};
  const location = `${electionData.normalizedInput.city}, ${electionData.normalizedInput.state} ${electionData.normalizedInput.zip}`
  const locationInfo = (
    <header>
      <h1>Your current representatives</h1><br />
      <h3>Showing results for {location}</h3>
    </header>
  );

  return (
    <div className="container">
				<header>
					<h1>Sign Up</h1>
        </header>
					<form className="App-body p-2 rounded" onSubmit={this.onSubmit}>
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
							/>
						</label>
						<h3>Policy Importance (0-10)</h3>
						{sliderAttributeHTML}
						{/* <Link to="/matching"> */}
						<button className="btn btn-primary">Create Profile</button>
						{/* </Link> */}
					</form>
			</div>
  );
}