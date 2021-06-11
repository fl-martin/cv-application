import React, { Component } from "react";
import EmployList from "./EmployList";

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
			creatingEmploy: true,
			employArray: [],
		};
		this.addEmploy = this.addEmploy.bind(this);
		this.setEmployData = this.setEmployData.bind(this);
		this.saveEmploy = this.saveEmploy.bind(this);
		this.removeEmploy = this.removeEmploy.bind(this);
	}

	addEmploy() {
		this.setState({
			creatingEmploy: true,
		});
	}

	setEmployData(e) {
		const userInput = e.target.value;
		const prop = e.target.id;
		this.setState({
			employ: { ...this.state.employ, [prop]: userInput },
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

	removeEmploy(e) {
		const toRemove = e.target.parentNode.id;

		if (this.state.employArray.length === 1) {
			this.setState({ creatingEmploy: true });
		}

		this.setState({
			employArray: this.state.employArray.filter(
				(element, index) => index !== toRemove
			),
		});
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
			creatingEmploy: false,
		});
	}

	render() {
		return (
			<div>
				<h3>
					<i className="fas fa-briefcase"> Experience</i>
				</h3>
				<ul id="employList">
					<EmployList
						employArray={this.state.employArray}
						saveEmploy={this.saveEmploy}
						removeEmploy={this.removeEmploy}
						creatingEmploy={this.state.creatingEmploy}
						setEmployData={this.setEmployData}
						section={Object.keys(this.state)[0]}
					></EmployList>
				</ul>
				{this.state.creatingEmploy === false && (
					<button onClick={this.addEmploy}>
						<i className="fas fa-plus"></i>
					</button>
				)}
			</div>
		);
	}
}

export default Experience;
