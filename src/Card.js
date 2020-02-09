import { animated, interpolate } from 'react-spring/hooks';

import PropTypes from 'prop-types';
import React from 'react';
import data from './data';

class Card extends React.Component {
	render() {
		const tbody = [];
		const { i, x, y, rot, scale, trans, bind, data } = this.props;
		const { keyIssues, pic, issues } = data[i];

		console.log(issues);
		for(let i = 0; i<issues.length; i++) {
			tbody.push(issues[i].name + ":" + issues[i].opinion + "\n")
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
							{tbody}
								
							
							
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
