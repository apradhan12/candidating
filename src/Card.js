import { animated, interpolate } from 'react-spring/hooks';

import PropTypes from 'prop-types';
import React from 'react';
import data from './data';

class Card extends React.Component {
	render() {
		const tbody = [];
		const tbodyopinion = [];
		const { i, x, y, rot, scale, trans, bind, data } = this.props;
		const { keyIssues, pic, issues } = data[i];

		console.log(issues);
		for (let i = 0; i < issues.length; i++) {
			const tbodyname = issues[i].name;
			const tbodyopinion = issues[i].opinion;

			tbody.push(
				<tr>
					<td>{tbodyname}</td>
					<td>{tbodyopinion}</td>
				</tr>
			);
		}

		return (
			<animated.div
				key={i}
				className="card-wrapper"
				style={{
					transform: interpolate([ x, y ], (x, y) => `translate3d(${x}px,0px,0)`)
				}}
			>
				<animated.div
					{...bind(i)}
					className="inner-card-wrapper"
					style={{
						transform: interpolate([ rot, scale ], trans)
					}}
				>
					<div className="candidate-card">
						<div className="candidate-image-wrapper">
							<div className="candidate-image rounded">
								<img src={pic} className="blur" alt="profilePicture" />
							</div>
						</div>
						<br />
						<div>
							<span className="key-issues">
								<b>Key Issues:</b> {keyIssues}
							</span>
							<br />

							<div class="container">
								<div class="table-responsive">
									<table class="table table-sm card-table">
										<thead>
											<tr>
												<th>Issue</th>

												<th>Opinion</th>
											</tr>
										</thead>
										<tbody>{tbody}</tbody>
									</table>
								</div>
							</div>

							<span />
						</div>
					</div>
				</animated.div>
			</animated.div>
		);
	}
}

Card.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	distance: PropTypes.string,
	text: PropTypes.string,
	pics: PropTypes.array
};

export default Card;
