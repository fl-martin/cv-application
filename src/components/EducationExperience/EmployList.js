import React, { Component } from "react";
import EmployEducationForm from "./EmployEducationForm";

class EmployList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let employElements;
		if (this.props.employArray.length > 0) {
			employElements = this.props.employArray.map((element, index) => {
				return (
					<div key={index} id={index}>
						<li>
							<h4 id="employTitle">
								{element.position} in {element.company}
							</h4>
							<div id="yearsEmploy">
								{element.year_start} to {element.year_end}
							</div>
							<p>{element.description}</p>
						</li>
						<button
							type="button"
							onClick={this.props.removeEmploy}
						></button>
					</div>
				);
			});
		}
		if (this.props.creatingEmploy) {
			return (
				<div>
					{employElements}
					<EmployEducationForm
						section={this.props.section}
						setEmployData={this.props.setEmployData}
						saveEmploy={this.props.saveEmploy}
					></EmployEducationForm>
				</div>
			);
		} else if (!this.props.creatingEmploy) return employElements;
	}
}

export default EmployList;
