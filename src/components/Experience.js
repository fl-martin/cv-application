import React, { Component } from "react";
import Employ from "./Employ";

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employ: {
				company: "",
				position: "",
				year_start: "",
				year_end: "",
				description: "",
			},
			employArray: [],
		};
	}
	render() {
		return (
			<div>
				<h3>
					<i className="fas fa-briefcase"> Experience</i>
				</h3>
				<ul id="employList">
					<Employ employArray={this.state.employArray}></Employ>
				</ul>
			</div>
		);
	}
}

export default Experience;
