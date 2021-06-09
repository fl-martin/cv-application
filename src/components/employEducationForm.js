import React, { Component } from "react";

class EmployEducationForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.section === "employ") {
			return (
				<form>
					<div>
						seguir aca con inputs de experiencia labo, agregar
						delete en cad uno
					</div>
					<button
						type="button"
						onClick={this.props.saveEmploy}
					></button>
				</form>
			);
		} else if (this.props.section === "education") {
			return <div>education form</div>;
		}
	}
}

export default EmployEducationForm;
