import './Matches.css';

import { Link } from 'react-router-dom';
import React from 'react';
import data from './data.js';

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
					<div className="register">
						<a href="https://vote.gov/" rel="noopener noreferrer" target="_blank">
							Register to vote!
						</a>
					</div>
					<div className="reset-wrapper">
						<Link to="/matching">
							<button className="btn btn-primary">Reset Matches</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Matches;
