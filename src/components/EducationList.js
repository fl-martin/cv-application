import React, { Component } from "react";
import EmployEducationForm from "./EmployEducationForm";

class EducationList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let educationElements;
		if (this.props.educationArray.length > 0) {
			educationElements = this.props.educationArray.map(
				(element, index) => {
					return (
						<div key={index} id={index}>
							<li>
								<h4 id="educationTitle">
									{element.title}, {element.institution}
								</h4>
								<div id="yearsEducation">
									{element.year_start} to {element.year_end}
								</div>
								<p>{element.description}</p>
							</li>
							<button
								type="button"
								onClick={this.props.removeEducation}
							></button>
						</div>
					);
				}
			);
		}
		if (this.props.creatingEducation) {
			return (
				<div>
					{educationElements}
					<EmployEducationForm
						section={this.props.section}
						setEducationData={this.props.setEducationData}
						saveEducation={this.props.saveEducation}
					></EmployEducationForm>
				</div>
			);
		} else if (!this.props.creatingEducation) return educationElements;
	}
}

export default EducationList;
