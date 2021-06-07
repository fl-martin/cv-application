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
			addingEmploy: true,
			employArray: [],
		};
		this.addEmploy = this.addEmploy.bind(this);
		this.saveEmploy = this.saveEmploy.bind(this);
		this.removeEmploy = this.removeEmploy.bind(this);
	}

	addEmploy() {
		console.log("aa");
	}

	saveEmploy() {
		this.employArray.push(this.state.employ);
	}

	removeEmploy() {
		console.log("removed");
	}

	render() {
		return (
			<div>
				<h3>
					<i className="fas fa-briefcase"> Experience</i>
				</h3>
				<ul id="employList">
					<Employ
						employArray={this.state.employArray}
						saveEmploy={this.saveEmploy}
						removeEmploy={this.removeEmploy}
						addingEmploy={this.state.addingEmploy}
					></Employ>
				</ul>
				<button onClick={this.addEmploy}>
					<i className="fas fa-plus"></i>
				</button>
			</div>
		);
	}
}

export default Experience;
