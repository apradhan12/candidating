import './Matches.css';

import React from 'react';
import data from './data';

class Matches extends React.Component {
	render() {
		console.log(this.props.location.state.matches);
		// const { po } = this.props.location.state.matches;

		// console.log(matches);

		const tbody = [];

		for (let i = 0; i < this.props.location.state.matches.length; i++) {
			tbody.push(
				<tr key={i}>
					<td>
						<div>
							<img className="candidate-icon" src={data[this.props.location.state.matches[i]].pic} />
						</div>
					</td>
					<td>{data[this.props.location.state.matches[i]].name}</td>
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
				</div>
			</div>
		);
	}
}

export default Matches;
