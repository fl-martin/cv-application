import React, { Component } from "react";

class Employ extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.employList);
		if (this.props.employList) {
			const employList = this.props.employList.map((element, index) => {
				<li key={index}>
					<h4 id="employTitle">
						{element.employ.position} in {element.employ.company}
					</h4>
					<div id="yearsEmploy">
						{element.employ.year_start}-{element.employ.year_end}
					</div>
					<p>{element.employ.description}</p>
				</li>;
			});
			return employList;
		} else return null;
	}
}

export default Employ;
