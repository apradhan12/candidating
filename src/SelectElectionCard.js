import PropTypes from 'prop-types';
import React from 'react';
import { animated } from 'react-spring/hooks';

class SelectElectionCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '1' };

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.parentCallback(this.state);
	}

	onChange(event) {
		event.preventDefault();
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<animated.div style={{ transform: 'translate3d(0, 0, 0)' }} className="card-wrapper">
				<animated.div className="inner-card-wrapper">
					<div className="candidate-card">
						<form onChange={this.onChange} onSubmit={this.onSubmit}>
							<label htmlFor="exampleFormControlSelect1">Select Election</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option value="1">National Presidential Election</option>
								<option value="2">U.S. House of Representatives (MA 7th district)</option>
								<option value="3">Boston City Council</option>
							</select>
							<button className="btn btn-primary" type="submit">
								Submit
							</button>
						</form>
					</div>
				</animated.div>
			</animated.div>
		);
	}
}

SelectElectionCard.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	distance: PropTypes.string,
	text: PropTypes.string,
	pics: PropTypes.array
};

export default SelectElectionCard;
