/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import  React, { useState } from 'react';
import './CreateAccount.css';
import US_STATES from './us_states';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  const initialValues = {
    name: '',
    zipCode: '',
    city: '',
    state: '',
  };

  const regex = {
    name: /^.+$/,
    zipCode: /^[0-9]{5}$/,
    city: /^.+$/,
  };

  function validate(values) {
    const errors = {};
    for (const key of Object.keys(values)) {
      if (!values[key]) {
        errors[key] = 'Required';
      } else if (regex[key] && !regex[key].test(values[key])) {
        errors[key] = `Invalid ${key}`;
      }
    }
    return errors;
  }

  function onSubmit(values, {setSubmitting}) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  const sliderAttributes = ["Economy",
                            "Civil Rights",
                            "Education",
                            "Environment",
                            "Foreign Policy",
                            "Healthcare",
                            "Gun Control",
                          ]

  const [sliderStates, setSliderStates] = useState({})
  const refs = {}
  const sliderAttributeHTML = sliderAttributes.map((name) =>  {
    console.log("hi");
    refs[name] = React.createRef();
    return ( 
    <div class="row">
      <div class="form-group col-lg-2">
        <label for={name}>{name}:</label>
          <div className="App-slider">
          <input className="App-slider"
            type="range" class="form-control-range" id={name} min="0" max="10" value={sliderStates[name]}
            onChange={(event) => {
              console.log("slider states:", event.target.value);
              const newSliderStates = sliderStates;
              newSliderStates[name] = event.target.value;
              setSliderStates(newSliderStates);
              refs[name].current.innerHTML = sliderStates[name];
            }}
          />
          <label className="App-slider" ref={refs[name]}>5</label>
        </div>
      </div>
    </div>
  ) } )


  return (
    <div class="container">
      <header>
        <h1>Sign Up</h1>
        <form class="App-body p-2 rounded">
          <h3>Information</h3>
          <label htmlFor="name">
                Name:
            <input type="text" name="Name" id="name" placeholder="Enter your name" class="form-control" />
          </label>
          <label htmlFor="city">
                City:
            <input type="text" name="City" id="city" placeholder="Enter your city" class="form-control"/>
          </label>
          <label htmlFor="zipCode">
                ZIP Code:
            <input type="text" name="Zip Code" id="zipCode" placeholder="Enter your zip code" class="form-control" />
          </label>
          <h3>Policy Importance (0-10)</h3>
          {sliderAttributeHTML}
          <div>
						<Link to="/matching">
						  <button className="btn btn-primary">Create Profile</button>
						</Link>
					</div>
        </form>
      </header>
    </div>
  );
}

export default App;
