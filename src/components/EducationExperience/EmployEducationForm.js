import React from "react";

function EmployEducationForm(props) {
	if (props.section === "employ") {
		return (
			<form>
				<input
					id="company"
					placeholder="Company..."
					value={props.employValues.company}
					onChange={props.setEmployData}
				></input>
				<input
					id="position"
					placeholder="Position..."
					value={props.employValues.position}
					onChange={props.setEmployData}
				></input>
				From:{" "}
				<input
					id="year_start"
					type="month"
					value={props.employValues.year_start}
					onChange={props.setEmployData}
				></input>
				To:{" "}
				<input
					id="year_end"
					type="month"
					value={props.employValues.year_end}
					onChange={props.setEmployData}
				></input>
				<input
					id="description"
					placeholder="Comments..."
					value={props.employValues.description}
					onChange={props.setEmployData}
				></input>
				<button type="button" onClick={props.saveEmploy}>
					<i
						className="fas fa-save"
						style={{ pointerEvents: "none" }}
					></i>
				</button>
			</form>
		);
	} else if (props.section === "education") {
		return (
			<form>
				<input
					id="institution"
					placeholder="Institution..."
					value={props.educationValues.institution}
					onChange={props.setEducationData}
				></input>
				<input
					id="title_"
					placeholder="Title..."
					value={props.educationValues.title_}
					onChange={props.setEducationData}
				></input>
				From:{" "}
				<input
					id="year__start"
					type="month"
					value={props.educationValues.year_start}
					onChange={props.setEducationData}
				></input>
				To:{" "}
				<input
					id="year__end"
					type="month"
					value={props.educationValues.year_end}
					onChange={props.setEducationData}
				></input>
				<input
					id="description_"
					placeholder="Comments..."
					value={props.educationValues.description_}
					onChange={props.setEducationData}
				></input>
				<button type="button" onClick={props.saveEducation}>
					<i
						className="fas fa-save"
						style={{ pointerEvents: "none" }}
					></i>
				</button>
			</form>
		);
	}
}

export default EmployEducationForm;
