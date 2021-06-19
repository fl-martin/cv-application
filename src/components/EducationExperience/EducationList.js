import React from "react";
import EmployEducationForm from "./EmployEducationForm";

function EducationList(props) {
	let educationElements;
	if (props.educationArray.length > 0) {
		educationElements = props.educationArray.map((element, index) => {
			return (
				<div key={index} id={index}>
					<li>
						<h4 id="educationTitle">
							{element.title_}, {element.institution}
						</h4>
						<div id="yearsEducation">
							{element.year__start} to {element.year__end}
						</div>
						<p>{element.description_}</p>
					</li>
					<button
						type="button"
						onClick={props.removeEducation}
					></button>
				</div>
			);
		});
	}
	if (props.creatingEducation) {
		return (
			<div>
				{educationElements}
				<EmployEducationForm
					section={props.section}
					setEducationData={props.setEducationData}
					saveEducation={props.saveEducation}
					educationValues={props.educationValues}
				></EmployEducationForm>
			</div>
		);
	} else if (!props.creatingEducation) return educationElements;
}

export default EducationList;
