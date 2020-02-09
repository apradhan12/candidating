import { animated, interpolate } from 'react-spring/hooks';

import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
	render() {
		const { i, x, y, rot, scale, trans, bind, data } = this.props;
		const { keyIssues, pic, issues } = data[i];

		console.log(issues);

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
						<div>
							<img src={pic} className="blur" alt="profilePicture" />
						</div>
						<br />
						<div>
							<span className="key-issues">
								<b>Key Issues:</b> {keyIssues}
							</span>
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
