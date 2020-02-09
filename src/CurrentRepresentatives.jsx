import React, { useState } from 'react';
import Flag from './usflag.png';
import { Link } from 'react-router-dom';
import './CurrentRepresentatives.css';
import APICallerUtils from './ApiCaller.jsx';

export default class CurrentRepresentatives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pageState: (<div></div>)};
  }

  componentDidMount() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    this.userProfile = userProfile;
    const address = `${userProfile.city}, ${userProfile.state} ${userProfile.zipCode}`;
    this.address = address;
    new APICallerUtils().getRepresentatives({"address": address}).then(this.updatePage.bind(this));
  }

  updatePage(electionData) {
    if (electionData && !electionData.error && electionData.normalizedInput.city && electionData.normalizedInput.state) {
      console.log(electionData);
      const location = `${electionData.normalizedInput.city}, ${electionData.normalizedInput.state} ${electionData.normalizedInput.zip}`;
      const tbody = [];

      for (const office of electionData.offices) {
        const tableRowsForOffice = [];
        for (const officialIndex of office.officialIndices) {
          const official = electionData.officials[officialIndex];
          let nameHtml;
          if (official.urls) {
            nameHtml = (<a href={official.urls[0]} target="_blank">{official.name}</a>);
          } else {
            nameHtml = (<span>{official.name}</span>);
          }

          tableRowsForOffice.push(
            [
              <td><img src={official.photoUrl || Flag} alt="Candidate photo" className="candidate-icon" /></td>,
              <td>{nameHtml}</td>,
              <td>{official.party}</td>,
            ]
          );
        }
        if (tableRowsForOffice.length > 0) {
          tableRowsForOffice[0] = (
            <tr>
              <td rowSpan={tableRowsForOffice.length}>{office.name}</td>
              {tableRowsForOffice[0]}
            </tr>
          );
          for (let i = 1; i < tableRowsForOffice.length; i++) {
            tableRowsForOffice[i] = (
              <tr>
                {tableRowsForOffice[i]}
              </tr>
            );
          }
        }

        tbody.push(...tableRowsForOffice);
      }

      const locationInfo = (
        <header className="center">
          <h1>Your elected officials</h1><br />
          <h3>Showing results for {location}</h3>
        </header>
      );

      this.setState({ pageState: (
        <div className="container current-reps">
          {locationInfo}
          <table className="table">
            <thead>
              <th>Office</th>
              <th></th>
              <th>Name</th>
              <th>Party</th>
            </thead>
            <tbody>{tbody}</tbody>
          </table>
        </div>
      )});
    } else {
      console.log("address", this.address);
      this.setState({
        pageState: (
          <div className="container current-reps">
            <h1>Your elected officials</h1><br />
            Please set your location to see your current representatives.<br />
            <Link to="/createaccount">
              <button className="btn btn-primary m-2">Set Preferences</button>
            </Link>
          </div>
        )
      });
    }
  }

  render() {
    return (<div>{this.state.pageState}</div>);
  }
}
