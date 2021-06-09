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
		this.setState({
			addingEmploy: true,
		});
	}

	saveEmploy() {
		this.setState(
			{
				employArray: [...this.state.employArray, this.state.employ],
			},

			() => {
				this.clearEmploy();
			}
		);
	}

	removeEmploy() {
		console.log("removed");
	}

	clearEmploy() {
		this.setState({
			employ: {
				company: "",
				position: "",
				year_start: "",
				year_end: "",
				description: "",
			},
			addingEmploy: false,
		});
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
