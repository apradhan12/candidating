import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { animated } from 'react-spring/hooks';

class ViewMatchesCard extends React.Component {
	render() {
		return (
			<animated.div style={{ transform: 'translate3d(0, 0, 0)' }} className="card-wrapper">
				<animated.div className="inner-card-wrapper">
					<div className="candidate-card">
						<Link to={{ pathname: '/matches', state: { matches: this.props.matches } }}>
							<button className="btn btn-primary">View Matches</button>
						</Link>
					</div>
				</animated.div>
			</animated.div>
		);
	}
}

ViewMatchesCard.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	distance: PropTypes.string,
	text: PropTypes.string,
	pics: PropTypes.array
};

export default ViewMatchesCard;
