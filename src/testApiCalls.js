import React, { useState, useEffect } from 'react';
import './App.css';

function encodeData(data) {
  return Object.keys(data).map(function(key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
  }).join("&");
}

function App() {
  const CIVIC_INFO_API_KEY = process.env.REACT_APP_CIVIC_INFO_API_KEY;
  const REPRESENTATIVES_ENDPOINT = `https://www.googleapis.com/civicinfo/v2/representatives`;

  async function getRepresentatives(params) {
    const query_params = {...params, "key": CIVIC_INFO_API_KEY};
    const response = await fetch(REPRESENTATIVES_ENDPOINT + "?" + encodeData(query_params));
    const data = await response.json();
    console.log(data);
  }

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  function handleChange(event) {
    console.log(event.target);
    setZip(event.target.value);
  }

  function handleSubmit(event) {
    getRepresentatives({"address": zip});
    event.preventDefault();
  }

  useEffect(() => {
    getRepresentatives({"address": "02115"});
  }, []);

  return (
    <div className="App">Hello
      <h1>Hello React!</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <label>City: </label>
        <input value={city} onChange={handleChange} /><br />
        <label>State: </label>
        <input value={state} onChange={handleChange} /><br />
        <label>ZIP code: </label>
        <input className="zip-code-entry" type="text" value={zip} onChange={handleChange} maxLength="5" /><br />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
