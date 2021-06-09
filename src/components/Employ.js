import React, { Component } from "react";
import EmployEducationForm from "./EmployEducationForm";

class Employ extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employ: { data: "", editing: true },
		};
	}
	render() {
		let employElements;
		if (this.props.employArray.length > 0) {
			employElements = this.props.employArray.map((element, index) => {
				return (
					<li key={index}>
						<h4 id="employTitle">
							{element.position} in {element.company}
						</h4>
						<div id="yearsEmploy">
							{element.year_start}-{element.year_end}
						</div>
						<p>{element.description}</p>
					</li>
				);
			});
		}
		if (this.props.addingEmploy) {
			return (
				<div>
					{employElements}
					<EmployEducationForm
						section={Object.keys(this.state)[0]}
						saveEmploy={this.props.saveEmploy}
					></EmployEducationForm>
				</div>
			);
		} else if (!this.props.addingEmploy) return employElements;
	}
}

export default Employ;
