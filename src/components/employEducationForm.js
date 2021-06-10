import React, { Component } from "react";

class EmployEducationForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.section === "employ") {
			return (
				<form onChange={this.props.setEmployData}>
					<input id="company" placeholder="Company..."></input>
					<input id="position" placeholder="Position..."></input>
					From: <input id="year_start" type="month"></input>
					To: <input id="year_id" type="month"></input>
					<input id="description" placeholder="Comments..."></input>
					<button type="button" onClick={this.props.saveEmploy}>
						<i
							className="fas fa-save"
							style={{ pointerEvents: "none" }}
						></i>
					</button>
				</form>
			);
		} else if (this.props.section === "education") {
			return <div>education form</div>;
		}
	}
}

export default EmployEducationForm;
