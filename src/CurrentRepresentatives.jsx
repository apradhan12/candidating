import React, { useState } from 'react';
import Flag from './usflag.png';
import './CurrentRepresentatives.css';

const [pageState, setPageState] = useState(<div></div>)

setPageState()

function CurrentRepresentatives() {
  const electionData = require('./testElectionData.json');
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
    <header>
      <h1>Your current representatives</h1><br />
      <h3>Showing results for {location}</h3>
    </header>
  );

  return (
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
  );
}

export default CurrentRepresentatives;