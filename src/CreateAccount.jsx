/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './CreateAccount.css';
import US_STATES from './us_states';

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

  return (
    <div className="App-header">
      <header>
        <h1>Sign Up</h1>
        <Formik
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
        </Formik>
        <form className="App-body">
          <h3>Information</h3>
          <label htmlFor="name">
                Name:
            <input type="text" name="Name" id="name" />
          </label>
          <p />
          <label htmlFor="zipCode">
                ZIP Code:
            <input type="text" name="Zip Code" id="zipCode" />
          </label>
          <h3>Policy Importance (0-10)</h3>
          <label>
                Sustainability:
            <input type="number" name="Sustainability" />
          </label>
          <p />
          <label>
                Healthcare:
            <input type="number" name="Healthcare" />
          </label>
          <p />
          <label>
                Education:
            <input type="number" name="Education" />
          </label>
          <p />
          <label>
                Gun Reform:
            <input type="number" name="Gun Reform" />
          </label>
          <p />
          <label>
                Student Debt:
            <input type="number" name="Student Deb" />
          </label>
          <p />
          <label>
                Abortion:
            <input type="number" name="Abortion" />
          </label>
        </form>
        <input className="App-button" type="submit" value="Create Profile" />
      </header>
    </div>
  );
}

export default App;
