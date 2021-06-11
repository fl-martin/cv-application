import React, { Component } from "react";
import EducationList from "./EducationList";

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			education: {
				institution: "",
				title_: "",
				year__start: "",
				year__end: "",
				description_: "",
			},
			creatingEducation: true,
			educationArray: [],
			skills: [],
		};
		this.addEducation = this.addEducation.bind(this);
		this.setEducationData = this.setEducationData.bind(this);
		this.saveEducation = this.saveEducation.bind(this);
		this.removeEducation = this.removeEducation.bind(this);
	}

	addEducation() {
		this.setState({
			creatingEducation: true,
		});
	}

	setEducationData(e) {
		const userInput = e.target.value;
		const prop = e.target.id;
		this.setState({
			education: { ...this.state.education, [prop]: userInput },
		});
	}

	saveEducation() {
		this.setState(
			{
				educationArray: [
					...this.state.educationArray,
					this.state.education,
				],
			},

			() => {
				this.clearEducation();
			}
		);
	}

	removeEducation(e) {
		const toRemove = e.target.parentNode.id;

		if (this.state.educationArray.length === 1) {
			this.setState({ creatingEducation: true });
		}

		this.setState({
			educationArray: this.state.educationArray.filter(
				(element, index) => index != toRemove
			),
		});
	}

	clearEducation() {
		this.setState({
			education: {
				institution: "",
				title: "",
				year_start: "",
				year_end: "",
				description: "",
			},
			creatingEducation: false,
		});
	}

	render() {
		return (
			<div>
				<h3>
					<i className="fas fa-pen-square"> Education</i>
				</h3>
				<ul id="educationList">
					<EducationList
						educationArray={this.state.educationArray}
						saveEducation={this.saveEducation}
						removeEducation={this.removeEducation}
						creatingEducation={this.state.creatingEducation}
						setEducationData={this.setEducationData}
						section={Object.keys(this.state)[0]}
					></EducationList>
				</ul>
				{this.state.creatingEducation === false && (
					<button onClick={this.addEducation}>
						<i className="fas fa-plus"></i>
					</button>
				)}
			</div>
		);
	}
}

export default Education;
