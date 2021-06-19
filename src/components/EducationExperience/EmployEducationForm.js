import React, { Component } from "react";

class EmployEducationForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.section === "employ") {
			return (
				<form>
					<input
						id="company"
						placeholder="Company..."
						value={this.props.employValues.company}
						onChange={this.props.setEmployData}
					></input>
					<input
						id="position"
						placeholder="Position..."
						value={this.props.employValues.position}
						onChange={this.props.setEmployData}
					></input>
					From:{" "}
					<input
						id="year_start"
						type="month"
						value={this.props.employValues.year_start}
						onChange={this.props.setEmployData}
					></input>
					To:{" "}
					<input
						id="year_end"
						type="month"
						value={this.props.employValues.year_end}
						onChange={this.props.setEmployData}
					></input>
					<input
						id="description"
						placeholder="Comments..."
						value={this.props.employValues.description}
						onChange={this.props.setEmployData}
					></input>
					<button type="button" onClick={this.props.saveEmploy}>
						<i
							className="fas fa-save"
							style={{ pointerEvents: "none" }}
						></i>
					</button>
				</form>
			);
		} else if (this.props.section === "education") {
			return (
				<form onChange={this.props.setEducationData}>
					<input
						id="institution"
						placeholder="Institution..."
					></input>
					<input id="title_" placeholder="Title..."></input>
					From: <input id="year__start" type="month"></input>
					To: <input id="year__end" type="month"></input>
					<input id="description_" placeholder="Comments..."></input>
					<button type="button" onClick={this.props.saveEducation}>
						<i
							className="fas fa-save"
							style={{ pointerEvents: "none" }}
						></i>
					</button>
				</form>
			);
		}
	}
}

export default EmployEducationForm;
