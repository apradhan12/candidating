/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
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
                            "Gun Control"
                          ]
  const sliderAttributeHTML = sliderAttributes.map((name) =>  ( <div class="row">
  <div class="form-group col-lg-2">
    <label for={name}>{name}:</label>
    <input type="range" class="form-control-range" id={name} min="0" max="10" />
  </div>
</div>  ))

  return (
    <div class="container">
      <header>
        <h1>Sign Up</h1>
        {/* <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={true}>
          {({isSubmitting}) => (
            <Form className="App-body">
              <label>Name: </label><br />
              <Field name="name" />
              <ErrorMessage name="name" component="div" />
              <label>ZIP Code: </label><br />
              <Field name="zipCode" maxLength="5" />
              <ErrorMessage name="zipCode" component="div" />
              <label>City: </label><br />
              <Field name="city" />
              <ErrorMessage name="city" component="div" />
              <label>State: </label><br />
              <Field as="select" name="state">
                {Object.keys(US_STATES).map((usState, i) => (<option value={usState} key={i}>{usState}</option>))}
              </Field>
              <ErrorMessage name="state" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik> */}
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
          <button className = "App-button">
						<Link to="/matching">
						  <button className="btn btn-primary">Create Profile</button>
						</Link>
					</button>
        </form>
      </header>
    </div>
  );
}

export default App;
