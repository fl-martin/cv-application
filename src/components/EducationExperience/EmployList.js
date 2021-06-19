import React from "react";
import EmployEducationForm from "./EmployEducationForm";

function EmployList(props) {
	let employElements;
	if (props.employArray.length > 0) {
		employElements = props.employArray.map((element, index) => {
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
					<button type="button" onClick={props.removeEmploy}></button>
				</div>
			);
		});
	}
	if (props.creatingEmploy) {
		return (
			<div>
				{employElements}
				<EmployEducationForm
					section={props.section}
					setEmployData={props.setEmployData}
					saveEmploy={props.saveEmploy}
					employValues={props.employValues}
				></EmployEducationForm>
			</div>
		);
	} else if (!props.creatingEmploy) return employElements;
}

export default EmployList;
