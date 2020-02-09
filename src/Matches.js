import './Matches.css';

import React from 'react';
import data from './localData.js';

class Matches extends React.Component {
	render() {
		const tbody = [];

		for (let i = 0; i < this.props.location.state.matches.length; i++) {
			tbody.push(
				<tr key={i}>
					<td>
						<div>
							<img
								className="candidate-icon"
								alt="candidate"
								src={data[this.props.location.state.matches[i]].pic}
							/>
						</div>
					</td>
					<td>
						<a
							href={data[this.props.location.state.matches[i]].website}
							rel="noopener noreferrer"
							target="_blank"
						>
							{data[this.props.location.state.matches[i]].name}
						</a>
					</td>
					<td>{data[this.props.location.state.matches[i]].party}</td>
				</tr>
			);
		}

		return (
			<div className="card">
				<div className="card-body">
					<div className="header">Your Matches</div>
					<table className="table">
						<thead />
						<tbody>{tbody}</tbody>
					</table>
					<div class="register">
						<a href="https://vote.gov/" rel="noopener noreferrer" target="_blank">
							Register to vote!
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Matches;
