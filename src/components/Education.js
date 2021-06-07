import React, { Component } from "react";

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			educationHist: [],
			skills: [],
		};
	}
	render() {
		return (
			<div>
				<h3>
					<i className="fas fa-pen-square"> Education</i>
				</h3>
			</div>
		);
	}
}

export default Education;
